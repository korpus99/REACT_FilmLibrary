import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IPaginationControlsProps } from "../interfaces/IPaginationControlsProps";

const PaginationControls: React.FC<IPaginationControlsProps> = ({ page, nextPage, prevPage }) => {
    return (
        <div className="flex justify-center gap-1">
            <button
                className="px-5 py-2 border bg-[#3c948b] text-white rounded"
                onClick={() => prevPage()}
            >
                <FaAngleLeft />
            </button>
            <input
                type="text"
                className="text-center rounded border text-[#9ca3af] b-gray-100 w-[100px] px-6 py-2"
                value={page + 1}
                disabled
            />
            <button
                className="px-5 py-2 border bg-[#3c948b] text-white rounded"
                onClick={() => nextPage()}
            >
                <FaAngleRight />
            </button>
        </div>
    );
};

export default PaginationControls;
