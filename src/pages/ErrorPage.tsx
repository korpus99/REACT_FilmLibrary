import Navbar from "../components/Navbar";

const DetailsPage = () => {
    return (
        <div className="w-full">
            <div className="bg-[#f5f3f1] text-[#9ca3af] min-h-screen">
                <Navbar />
                <div className="md:max-w-[1480px] max-w-[550px] m-auto px-5 py-5">
                    <div className="flex flex-col justify-center items-center min-h-[500px]">
                        <div className="text-5xl font-bold text-center text-red-600">
                            BŁĄD
                        </div>
                        <div className="text-3xl font-bold text-center pt-10">
                            Wyszukaj ponownie lub wróć na {" "}
                            <a className="text-[#3c948b]" href="/">
                                stronę główną
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
