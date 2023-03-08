export interface ssrProps {
  contentData: {
    contentId: string,
    name: string,
    vodType: string,
    images?: {
      BOXAR: string,
      COVER: string,
      HERO: string
    },
    description: {
      synopsis: string,
      contentLengthInSeconds: 3290,
    },
    publicReleaseDateUTC: number,
    studioNames: string,
    contributorGroups: {
      DIRECTORS: string,
      STARRING_CAST: string,
    },
    genres: string,
    regulatoryRating: string,
    contentDescriptors: string[],
    audioTracks: string[],
    seasonId: string,
    seriesId: string,
    seriesName: string,
    seasonNumber: number,
    episodeNumber: number,
    episodeImages?: {
      BOXART: string,
      HERO: string,
      COVER: string
    },
    timecode: {
      endCreditsTime: number,
    }
  },
  playbackData: {
    contentId: string,
    watchPc: number,
    contentLengthInSeconds: number,
    playbackAssets: {
      playbackAssetSource: string,
      hls: {
        manifestUrl: string,
      },
      dash: {
        manifestUrl: string
      }
    }
  },
  isInvalidContendId: boolean,
}