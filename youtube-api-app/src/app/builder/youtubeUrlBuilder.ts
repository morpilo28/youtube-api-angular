import { environment } from 'src/environments/environment';

export class YouTubeUrlBuilder {
    //?key=${environment.apiKey}&q=${query}&part=snippet&type=video`
    private urlParams = {}; // key, q, part, type
    private baseUrl: string;

    constructor(apiKey: string, baseUrl: string) {
        this.urlParams['key'] = apiKey;
        this.baseUrl = baseUrl;
    }

    addPart(partValue): void {
        this.urlParams['part'] = partValue;
    }

    addQueryForSearch(queryValue): void {
        this.urlParams['q'] = queryValue.replace(' ', '%20');
    }

    addType(typeValue): void {
        this.urlParams['type'] = typeValue;
    }

    addVideosId(videosId){
        this.urlParams['id'] = videosId;
    }

    toString(): string {
        const queryString = Object.keys(this.urlParams).map((key) => {
            return key + '=' + this.urlParams[key];
        }).join('&');
        return this.baseUrl + '?' + queryString;
    }
}