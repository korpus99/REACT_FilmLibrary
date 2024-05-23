import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useNavbar } from "../hooks/Navbar.hooks";

const Navbar = () => {
    const { toggle, handleClick, handleInputChange, handleSearch } = useNavbar();

    return (
        <div className="w-full h-[80px] bg-[#f0ebe5] shadow-xl">
            <div className="md:max-w-[1480px] max-w-[550px] px-5 m-auto w-full h-full flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-[#9ca3af]">
                    Biblioteka Filmowa
                </a>

                <div className="hidden md:flex items-center"></div>

                <div className="hidden md:flex">
                    <div className="flex justify-center md:flex-row flex-col py-8 text-[#3c948b] font-bold gap-5">
                        <input
                            type="text"
                            className="text-center rounded border text-[#9ca3af] b-gray-100 min-w-[450px] px-6 py-2"
                            placeholder="Nazwa Filmu / Serialu"
                            onChange={handleInputChange}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                        />
                        <button
                            className="bg-[#3c948b] text-white rounded px-6 py-2 min-w-[150px]"
                            onClick={handleSearch}
                        >
                            Wyszukaj
                        </button>
                    </div>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    {toggle ? (
                        <IoMdClose size={20} />
                    ) : (
                        <CiMenuFries size={20} />
                    )}
                </div>
            </div>

            <div
                className={
                    toggle
                        ? "absolute z-10 p-4 bg-[#f0ebe5] w-full px-8 md:hidden"
                        : "hidden"
                }
            >
                <ul>
                    <div className="flex">
                        <div className="flex justify-center md:flex-row flex-col py-8 text-[#3c948b] font-bold gap-5 w-full">
                            <input
                                type="text"
                                className="text-center rounded border text-[#9ca3af] b-gray-100 px-6 py-2"
                                placeholder="Nazwa Filmu / Serialu"
                                onChange={handleInputChange}
                            />
                            <button
                                className="bg-[#3c948b] text-white rounded px-6 py-2 min-w-[200px]"
                                onClick={handleSearch}
                            >
                                Wyszukaj
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
