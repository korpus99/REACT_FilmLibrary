import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Navbar from "../components/Navbar";
import SearchResultsGrid from "../components/SearchResultsGrid";

const SearchResultsPage = () => {
    const filteredMovies = useSelector(
        (state: RootState) => state.filteredMovies.filteredMovies
    );

    return (
        <div className="w-full">
            <div className="bg-[#f5f3f1] text-[#9ca3af] min-h-screen">
                <Navbar />
                <div className="md:max-w-[1480px] max-w-[550px] m-auto px-5 py-5">
                    {filteredMovies && (
                        <SearchResultsGrid filteredMovies={filteredMovies} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
