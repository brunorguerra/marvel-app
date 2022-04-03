import { Container } from "./style";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PropsPagination {
    currentPage: number;
    forwardPage: () => void;
    backPage: () => void;
}

export const Pagination = ({
    currentPage,
    forwardPage,
    backPage,
}: PropsPagination) => {
    return (
        <Container>
            <button onClick={backPage}>
                <MdKeyboardArrowLeft size={30} />
            </button>
            <div className="pages">
                <p className={currentPage === 0 ? "currentPage" : ""}>
                    {currentPage > 0 ? currentPage : 1}
                </p>
                <p className={currentPage > 0 ? "currentPage" : ""}>
                    {currentPage > 0 ? currentPage + 1 : 2}
                </p>
                <p>{currentPage > 0 ? currentPage + 2 : 3}</p>
            </div>
            <button onClick={forwardPage}>
                <MdKeyboardArrowRight size={30} />
            </button>
        </Container>
    );
};
