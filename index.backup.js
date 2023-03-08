// get first command line argument
const url = process.argv[2];
console.log(" ");
console.log(cyan("Getting video info for: ") + url);
console.log(" ");
// jsdom 
const DOMParser = require('jsdom').JSDOM;
const logger = require('progress-estimator')()
const youtubedl = require('youtube-dl-exec')


  ; (async () => {

    const fs = require('fs')

    const subprocess = youtubedl.exec('https://d3s0ximcru5bdx.cloudfront.net/physicswallah-series1-exclusive-s1e6-1670819780992/dash/physicswallah-series1-exclusive-s1e6.mpd', {
      dumpSingleJson: true
    })

    console.log(`Running subprocess as ${subprocess.pid}`)

    subprocess.stdout.pipe(fs.createWriteStream('stdout.txt'))
    subprocess.stderr.pipe(fs.createWriteStream('stderr.txt'))

    setTimeout(subprocess.cancel, 30000)
    return;


    let response = await fetch(url);
    let html = await response.text();
    let dom = new DOMParser(html, {
      headers: {
        referer: "https://amazon.com/minitv"
      }
    });
    let document = dom.window.document;
    let data = JSON.parse(document.querySelector("#__NEXT_DATA__").innerHTML);
    let props = data.props.pageProps.ssrProps;
    let contentData = props.contentData;
    let playBackData = Object.entries(props.playbackData.playbackAssets).reduce((acc, [key, value]) => {
      if (typeof value !== "object") return acc;
      acc[key] = value.manifestUrl;
      return acc;
    }, {});

    console.log(" ")
    console.log(cyan("-".repeat(5) + " Video Info " + "-".repeat(5)));
    console.log(cyan("Title: ") + contentData.seriesName + " - " + contentData.name);
    console.log(cyan("Description: ") + contentData.description.synopsis);
    console.log(" ")
    console.log(cyan("-".repeat(5) + " Video URLS " + "-".repeat(5)));
    Object.entries(playBackData).forEach(([key, value]) => {
      console.log(cyan(key + " URL: ") + value);
    });
  })();

function cyan(text) {
  return "\x1b[36m" + text + "\x1b[0m";
}