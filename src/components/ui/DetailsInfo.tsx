import { IDetailsInfoProps } from "../../interfaces/IDetailsInfo";

const DetailsInfo: React.FC<IDetailsInfoProps> = ({ movieDetails }) => {
    return (
        <div className="w-full px-8 py-5 font-bold">
            <div className="text-center text-black text-3xl">
                {movieDetails.name ? movieDetails.name : "Brak danych"}
                <span className="text-sm text-[#9ca3af]">
                    [{movieDetails.id ? movieDetails.id : "Brak danych"}]
                </span>
            </div>
            <span className="text-black">Gatunek: </span>
            {movieDetails.genres ? movieDetails.genres.join(", ") : "Brak danych"}
            <br />
            <span className="text-black">Średnia ocen: </span>
            {movieDetails.rating && movieDetails.rating.average
                ? movieDetails.rating.average
                : "Brak danych"}
            <br />
            <span className="text-black">Data premiery: </span>
            {movieDetails.premiered ? movieDetails.premiered : "Brak danych"}
            <br />
            <span className="text-black">Opis filmu: </span>
            {movieDetails.summary ? (
                <div
                    dangerouslySetInnerHTML={{ __html: movieDetails.summary }}
                ></div>
            ) : (
                "Brak danych"
            )}
            <br />
            <span className="text-black">Rodzaj: </span>
            {movieDetails.type ? movieDetails.type : "Brak danych"}
            <br />
            <span className="text-black">Język: </span>
            {movieDetails.language ? movieDetails.language : "Brak danych"}
            <br />
            <span className="text-black">Status filmu: </span>
            {movieDetails.status ? movieDetails.status : "Brak danych"}
            <br />
            <span className="text-black">Oficjalna strona: </span>
            {movieDetails.officialSite ? (
                <a
                    href={movieDetails.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {movieDetails.officialSite}
                </a>
            ) : (
                "Brak danych"
            )}
            <br />
        </div>
    );
};

export default DetailsInfo;
