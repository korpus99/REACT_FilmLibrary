// Shows.hooks.ts
import { useEffect, useState } from "react";

const BASE_URL = "https://api.tvmaze.com";

export const useShows = () => {
    const [shows, setShows] = useState<any[]>([]);
    const [page, setPage] = useState<number>(0);

    const nextPage = () => {
        if (page >= 307) return;
        setPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        if (page <= 0) return;
        setPage((prevPage) => prevPage - 1);
    };

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch(`${BASE_URL}/shows?page=${page}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const fetchedShows = await response.json();
                setShows(fetchedShows);
            } catch (error) {
                console.log(error);
            }
        };

        fetchShows();
    }, [page]);

    return {
        shows,
        page,
        nextPage,
        prevPage,
    };
};
