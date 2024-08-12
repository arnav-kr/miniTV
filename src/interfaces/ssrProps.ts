export interface ServerResponse {
  widgets: [PlayerWidget, ...any],
  paginationProps: {
    hasNextPage: boolean,
    nextCursor: string
  },
  metaData: Metadata,
  isInvalidContendId?: boolean
}

export interface PlayerWidget {
  type: "PLAYER",
  data: {
    widgetId: string,
    playbackAssets: PlaybackAssets,
    contentDetails: ContentDetails,
  }
}


export interface StreamFormat {
  codec: Codec,
  manifestURL: string
}

export interface PlaybackAssets {
  manifestURL: string,
  manifestData: StreamFormat[],
  watchedPercentage: number,
  videoStartTimeInSec: number,
  videoStreamId: string
}
export interface Metadata {
  contentDetails: {
    contentId: string,
    name: string,
    imageSrc: string,
    synopsis: string,
    contentLengthInSeconds: number,
    seriesName: string,
    seasonName: string,
    episodeNumber: number,
    publicReleaseDateUTC: number,
    seasonNumber: number,
    vodType: "EPISODE",
    starringCast: string[],
    genres: string[],
  },
  canonicalUrl: string,
}

export interface ContentDetails {
  contentId: string,
  name: string,
  seriesId: string,
  seasonId: string,
  contentLengthInSeconds: number,
  seriesName: string,
  seasonName: string,
  seasonNumber: number,
  episodeNumber: number,
  thumbnailImage?: string,
  seasonThumbnailImage?: string,
  regulatoryRating: string,
  originalLanguage: string,
  contentDescriptors: string[]
}

export enum Codec {
  VP9 = "VP9",
  H_264 = "H_264"
}

export interface ContentInfo {
  name: string,
  mpdURL: string,
  duration: number,
  seasonNumber: number,
  episodeNumber: number,
  slug: string,
  description: string,
  rating: string,
  contentDescriptors: string[],
}