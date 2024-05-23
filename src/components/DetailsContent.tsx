import { IDetailsContentProps } from "../interfaces/IDetailsContent";
import DetailsInfo from "./ui/DetailsInfo";
import ImageSection from "./ui/ImageSection";

const DetailsContent: React.FC<IDetailsContentProps> = ({ movieDetails }) => {
    return (
        <div className="flex lg:flex-row flex-col">
            <ImageSection image={movieDetails.image} />
            <DetailsInfo movieDetails={movieDetails} />
        </div>
    );
};

export default DetailsContent;
