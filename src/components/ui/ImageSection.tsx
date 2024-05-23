import { IImageSectionProps } from "../../interfaces/IImageSection";

const ImageSection: React.FC<IImageSectionProps> = ({ image }) => {
    return (
        <div>
            {image && image.original ? (
                <img
                    src={image.original}
                    alt="Movie Poster"
                    className="rounded max-h-[700px]"
                />
            ) : (
                <div>Brak obrazka</div>
            )}
        </div>
    );
};

export default ImageSection;
