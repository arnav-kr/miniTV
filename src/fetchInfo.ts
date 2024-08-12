import { JSDOM } from "jsdom";
import { fetch } from "undici";
import { ContentInfo, PlayerWidget, ServerResponse } from "./interfaces";

export default async function (url: string): Promise<ContentInfo> {
  let regex: RegExp = /https?\:\/\/www\.amazon\.in\/minitv\/tp\/([a-z0-9-]+)/i;
  let id: string = url.replace(regex, "$1");

  let response = await fetch(`https://www.amazon.in/minitv/tp/${id}`, {
    headers: {
      referer: "https://amazon.com/minitv"
    }
  });
  let html: string = await response.text();

  let dom: JSDOM = new JSDOM(html);
  let document = dom.window._document;

  let data = JSON.parse(document.querySelector("#__NEXT_DATA__").innerHTML);
  let props: ServerResponse = data.props.pageProps.ssrProps;

  if (props.isInvalidContendId) throw new Error("Invalid URL or ID");

  let playerWidget: PlayerWidget = props.widgets.find((widget) => widget.type === "PLAYER");
  return {
    name: props.metaData.contentDetails.name,
    mpdURL: playerWidget.data.playbackAssets.manifestURL,
    duration: props.metaData.contentDetails.contentLengthInSeconds,
    seasonNumber: props.metaData.contentDetails.seasonNumber,
    episodeNumber: props.metaData.contentDetails.episodeNumber,
    slug: `${props.metaData.contentDetails.name}_S${props.metaData.contentDetails.seasonNumber}E${props.metaData.contentDetails.episodeNumber}`,
    description: props.metaData.contentDetails.synopsis,
    rating: playerWidget.data.contentDetails.regulatoryRating,
    contentDescriptors: playerWidget.data.contentDetails.contentDescriptors,
  };
}