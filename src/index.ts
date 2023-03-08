#!/usr/bin/env node
import fetch from "./fetchInfo";
import child_process from "child_process";

// make a cli tool that is proxy to youtube-dl just insert the url using fetchInfo

let url = process.argv[2];
let args = process.argv.slice(3);

; (async () => {

  let info = await fetch(url);
  let { playbackData } = info;
  let mpdURL = playbackData.playbackAssets.dash.manifestUrl;

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