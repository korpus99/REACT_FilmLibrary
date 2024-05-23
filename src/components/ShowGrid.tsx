import { IShowGridProps } from "../interfaces/IShowGrid";
import SingleItem from "./ui/SingleItem";

const ShowGrid: React.FC<IShowGridProps> = ({ shows }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10 py-6">
            {shows.map((show) => (
                <SingleItem key={show.id} show={show} />
            ))}
        </div>
    );
};

export default ShowGrid;
