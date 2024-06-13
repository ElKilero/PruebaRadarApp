import { z } from "zod";

export const videoListSchema = z.object({
    kind: z.string(),
    etag: z.string(),
    nextPageToken: z.string(),
    regionCode: z.string(),
    pageInfo: z.object({ totalResults: z.number(), resultsPerPage: z.number() }),
    items: z.array(
      z.union([
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
        }),
        z.object({
          kind: z.string(),
          etag: z.string(),
          id: z.object({ kind: z.string(), playlistId: z.string() }),
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
      ])
    )
  })
  