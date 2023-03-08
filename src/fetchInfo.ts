import { JSDOM } from "jsdom";
import { fetch } from "undici";
import { ssrProps } from "./interfaces";

export default async function (url: string): Promise<ssrProps> {
  // example: https://www.amazon.in/minitv/tp/0478a3f9-e35d-40d4-97e8-e09684007fa6
  let regex: RegExp = /https?\:\/\/www\.amazon\.in\/minitv\/tp\/([a-z0-9-]+)/i;
  // if url, get id from url
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
  let props: ssrProps = data.props.pageProps.ssrProps;

  if (props.isInvalidContendId) throw new Error("Invalid URL or ID");

  return props;
}