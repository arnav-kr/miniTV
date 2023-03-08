# miniTV

<p align="center"><img src="https://raw.githubusercontent.com/arnav-kr/DC-Tokens/main/images/minitv.svg" width="200px" /></p>

[![npm version](https://img.shields.io/npm/v/minitv.svg?maxAge=3600)](https://npmjs.com/package/minitv)
[![npm downloads](https://img.shields.io/npm/dt/minitv.svg?maxAge=3600)](https://npmjs.com/package/minitv)

---

## About
Downloader For Amazon miniTV

## Features
* Download Web Series/Episodes from Amazon miniTV

## Install

**Via NPM:**

```bash
npm install -g minitv
```

**Via Yarn:**

```bash
yarn global add minitv
```

**Via PNPM**
  
```bash
pnpm add -g minitv
```

## Usage

miniTV is a wrapper for [youtube-dl](https://github.com/ytdl-org/youtube-dl) and requires `youtube-dl` to be installed on your system to work. Further more, tools like [ffmpeg](https://ffmpeg.org/) and [ffprobe](https://ffmpeg.org/ffprobe.html) maybe required to be installed work properly in some cases.

[![youtube-dl](https://badgen.net/badge/download/youtube-dl/orange)](https://ytdl-org.github.io/youtube-dl/download.html)

[![ffmpeg](https://badgen.net/badge/download/ffmpeg/orange)](https://ffmpeg.org/download.html)


Run help commnad to see all the options

```bash
minitv --help
```

<img width="700" alt="image" src="[https://raw.](https://raw.githubusercontent.com/arnav-kr/DC-Tokens/main/images/screenshot.png)">

## Example

```bash
minitv https://www.amazon.in/minitv/tp/0478a3f9-e35d-40d4-97e8-e09684007fa6 -f bestvideo+bestaudio
```

## Report an Issue 

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

[arnav-kr](https://github.com/arnav-kr)

## License

The project is licensed under the [MIT](https://github.com/arnav-kr/minitv/blob/main/LICENSE) license.

