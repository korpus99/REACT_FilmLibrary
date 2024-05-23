import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import DetailsPage from "./pages/DetailsPage";
import { IMovieDetails } from "./interfaces/IStoreMovieDetails";
import { RootState } from "./state/store";
import { useSelector } from "react-redux";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    const movieDetails: IMovieDetails | null = useSelector(
        (state: RootState) => state.movieDetails.movieDetails
    );

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/result" element={<SearchResultsPage />} />
                    <Route
                        path="/details"
                        element={
                            movieDetails ? (
                                <DetailsPage />
                            ) : (
                                <ErrorPage />
                            )
                        }
                    />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
