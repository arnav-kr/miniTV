#!/usr/bin/env node
import fetch from "./fetchInfo";
import child_process from "child_process";
import { help } from "./consts";
import { ContentInfo } from "./interfaces";

let url = process.argv[2];
let args = process.argv.slice(3);

; (async () => {
  if (!url) {
    console.log(help);
    process.exit(0);
  }
  if (url === "-h" || url === "--help" || url === "help") {
    console.log(help);
    process.exit(0);
  }

  let info: ContentInfo;
  try {
    info = await fetch(url);
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }

  console.log("\n");
  console.log(`\x1b[1m${info.name} - Season ${info.seasonNumber} Episode ${info.episodeNumber}\x1b[0m`);
  console.log(`\x1b[90m${info.description}\x1b[0m`);
  console.log(`\x1b[36m${formatDuration(info.duration)}\x1b[0m • ${info.rating}`);
  console.log(``);
  console.log(`\x1b[31mContent Descriptors\x1b[0m: \x1b[90m${info.contentDescriptors.join(", ")}\x1b[0m\n`);
  console.log(`Dash URL: \x1b[36m${info.mpdURL}\x1b[0m`);
  console.log("\n");

  let ytdl = child_process.spawn("youtube-dl", [info.mpdURL, ...args], {
    stdio: "inherit",
  });

  ytdl.on("exit", (code) => {
    process.exit(code || 0);
  });

  ytdl.on("error", (err) => {
    console.error(err);
    process.exit(1);
  });
})();

function formatDuration(seconds: number = 0): string {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  seconds = Math.floor(seconds % 60);

  return `${hours}h ${minutes}m ${seconds}s`;
}