import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilteredMovies } from "../state/shows/filteredMovies";

const BASE_URL = "https://api.tvmaze.com";

export const useNavbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [toggle, setToggle] = useState(false);
    const [query, setQuery] = useState<string>("");

    const handleClick = () => setToggle(!toggle);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query === "") return;
        fetchSearchData();
        navigate("/result");
    };

    const fetchSearchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/search/shows?q=${query}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const fetchedSearch = await response.json();
            dispatch(setFilteredMovies(fetchedSearch));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        toggle,
        query,
        handleClick,
        handleInputChange,
        handleSearch,
    };
};
