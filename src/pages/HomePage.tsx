import ShowGrid from "../components/ShowGrid";
import Navbar from "../components/Navbar";
import PaginationControls from "../components/PaginationControls";
import { useShows } from "../hooks/HomePage.hooks";

const HomePage = () => {
    const { shows, page, nextPage, prevPage } = useShows();

    return (
        <div className="w-full">
            <div className="bg-[#f5f3f1] text-[#9ca3af] min-h-screen">
                <Navbar />
                <div className="md:max-w-[1480px] max-w-[550px] m-auto px-5 py-5">
                    <PaginationControls
                        page={page}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                    <ShowGrid shows={shows} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
