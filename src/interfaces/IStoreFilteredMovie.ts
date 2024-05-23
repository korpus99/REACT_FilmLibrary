export interface IShow {
    score: number;
    show: {
        id: number;
        url: string;
        name: string;
        type: string;
        language: string;
        genres: string[];
        status: string;
        runtime: number | null;
        averageRuntime: number | null;
        premiered: string;
        ended: string | null;
        officialSite: string | null;
        schedule: {
            time: string;
            days: string[];
        };
        rating: {
            average: number | null;
        };
        weight: number;
        network: {
            id: number | null;
            name: string | null;
            country: {
                name: string | null;
                code: string | null;
                timezone: string | null;
            } | null;
            officialSite: string | null;
        } | null;
        webChannel: {
            id: number;
            name: string;
            country: {
                name: string | null;
                code: string | null;
                timezone: string | null;
            } | null;
            officialSite: string | null;
        } | null;
        dvdCountry: string | null;
        externals: {
            tvrage: number | null;
            thetvdb: number | null;
            imdb: string | null;
        };
        image: {
            medium: string;
            original: string;
        };
        summary: string;
        updated: number;
        _links: {
            self: {
                href: string;
            };
            nextepisode: {
                href: string;
                name: string;
            } | null;
            previousepisode: {
                href: string;
                name: string;
            } | null;
        };
    };
}

export interface ISearchResultsState {
    filteredMovies: IShow[];
}
