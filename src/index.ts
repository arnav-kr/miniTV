#!/usr/bin/env node
import fetch from "./fetchInfo";
import child_process from "child_process";
import { help } from "./consts";

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

  let mpdURL: string = "";
  try {
    let info = await fetch(url);
    let { playbackData } = info;
    mpdURL = playbackData.playbackAssets.dash.manifestUrl;
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }

  console.log(`Dash URL: \x1b[36m${mpdURL}\x1b[0m`);

  let ytdl = child_process.spawn("youtube-dl", [mpdURL, ...args], {
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