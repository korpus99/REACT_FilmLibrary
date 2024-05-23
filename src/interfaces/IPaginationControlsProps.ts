export interface IPaginationControlsProps {
    page: number;
    nextPage: () => void;
    prevPage: () => void;
}