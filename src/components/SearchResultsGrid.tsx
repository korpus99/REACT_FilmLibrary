import { ISearchResultsGridProps } from "../interfaces/ISearchResultsGridProps";
import SingleItem from "./ui/SingleItem";

const SearchResultsGrid: React.FC<ISearchResultsGridProps> = ({
    filteredMovies,
}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10 py-6">
            {filteredMovies.map((result, index) => (
                <SingleItem key={index} show={result.show} />
            ))}
        </div>
    );
};

export default SearchResultsGrid;
