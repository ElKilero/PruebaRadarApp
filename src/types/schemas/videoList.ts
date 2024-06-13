import { z } from "zod";

export const videoListSchema = z.object({
  kind: z.string(),
  etag: z.string(),
  nextPageToken: z.string(),
  regionCode: z.string(),
  pageInfo: z.object({ totalResults: z.number(), resultsPerPage: z.number() }),
  items: z.array(
    z.object({
      kind: z.string(),
      etag: z.string(),
      id: z.object({ kind: z.string(), videoId: z.string() }),
      snippet: z.object({
        publishedAt: z.string(),
        channelId: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.object({
          default: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          }),
          medium: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          }),
          high: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number()
          })
        }),
        channelTitle: z.string(),
        liveBroadcastContent: z.string(),
        publishTime: z.string()
      })
    })
  )
})

export interface VideoListItemProp {
  kind: string;
  etag: string;
  id: id;
  snippet: snippet;
}

interface id {
  kind: string;
  videoId: string;
}

interface thumbnails {
  default: thumbnailDetail;
  medium: thumbnailDetail;
  high: thumbnailDetail;
}

interface thumbnailDetail {
  url: string;
  width: number;
  height: number;
}

interface snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}