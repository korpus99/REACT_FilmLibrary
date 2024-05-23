import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Navbar from "../components/Navbar";
import DetailsContent from "../components/DetailsContent";
import { IMovieDetails } from "../interfaces/IStoreMovieDetails";

const DetailsPage = () => {
    const movieDetails: IMovieDetails | null = useSelector(
        (state: RootState) => state.movieDetails.movieDetails
    );

    return (
        <div className="w-full">
            <div className="bg-[#f5f3f1] text-[#9ca3af] min-h-screen">
                <Navbar />
                <div className="md:max-w-[1480px] max-w-[550px] m-auto my-10 px-5 py-5 bg-white">
                    {movieDetails && (
                        <DetailsContent movieDetails={movieDetails} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
