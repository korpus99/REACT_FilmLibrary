export interface IDetailsContentProps {
    movieDetails: {
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
        network: null | {
            id: number;
            name: string;
            country: null | {
                name: string;
                code: string;
                timezone: string;
            };
            officialSite: string | null;
        };
        webChannel: {
            id: number;
            name: string;
            country: null | {
                name: string;
                code: string;
                timezone: string;
            };
            officialSite: string | null;
        };
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
            previousepisode: {
                href: string;
                name: string;
            } | null;
        };
    };
}
