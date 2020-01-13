




    export interface YouTubePageInfo {
        totalResults: number;
        resultsPerPage: number;
    }

    export interface YouTubeId {
        kind: string;
        videoId: string;
    }

    export interface YouTubeThumbnailsDefault {
        url: string;
        width: number;
        height: number;
    }

    export interface YouTubeThumbnailsMedium {
        url: string;
        width: number;
        height: number;
    }

    export interface YouTubeThumbnailsHigh {
        url: string;
        width: number;
        height: number;
    }

    export interface YouTubeThumbnails {
        default: YouTubeThumbnailsDefault;
        medium: YouTubeThumbnailsMedium;
        high: YouTubeThumbnailsHigh;
    }

    export interface YouTubeSnippet {
        publishedAt: Date;
        channelId: string;
        title: string;
        description: string;
        thumbnails: YouTubeThumbnails;
        channelTitle: string;
        liveBroadcastContent: string;
    }

    export interface YouTubeItem {
        kind: string;
        etag: string;
        id: YouTubeId;
        snippet: YouTubeSnippet;
    }

    export interface YouTubeListModel {
        kind: string;
        etag: string;
        nextPageToken: string;
        regionCode: string;
        pageInfo: YouTubePageInfo;
        items: YouTubeItem[];
    }