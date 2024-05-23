import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMovieDetails } from "../../state/shows/movieDetails";

const SingleItem = ({ show }: { show: any }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleMore = (data: any) => {
        dispatch(setMovieDetails(data));
        navigate("/details");
    };

    return (
        <div className="rounded min-w-[350px] bg-gray-50 " key={show.id}>
            <div className="rounded-t flex justify-center py-2 bg-[#3c948b] px-8 text-white font-bold">
                {show.name}
            </div>
            <div className="flex justify-center py-4 min-h-[350px]">
                {show.image && show.image.medium ? (
                    <img src={show.image.medium} alt="" className="rounded" />
                ) : (
                    <div className="flex items-center">Brak obrazka</div>
                )}
            </div>
            <div className="rounded-b flex justify-center bg-[#3c948b] text-white">
                <button className="w-full h-full px-8 py-2 hover:shadow-xl" onClick={() => handleMore(show)}>Więcej</button>
            </div>
        </div>
    );
};

export default SingleItem;
