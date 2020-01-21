
export interface YouTubePageInfo {
    totalResults: number;
    resultsPerPage: number;
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

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeThumbnails {
    default: YouTubeThumbnailsDefault;
    medium: YouTubeThumbnailsMedium;
    high: YouTubeThumbnailsHigh;
    standard: Standard;
    maxres: Maxres;
}

export interface Localized {
    title: string;
    description: string;
}

export interface YouTubeSnippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: YouTubeThumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
}

export interface Top5YouTubeItem {
    kind: string;
    etag: string;
    id: string;
    snippet: YouTubeSnippet;
}

export interface MostWatchedModel {
    kind: string;
    etag: string;
    pageInfo: YouTubePageInfo;
    items: Top5YouTubeItem[];
}

