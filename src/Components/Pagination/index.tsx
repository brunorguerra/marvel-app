import { Container } from "./style";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";

interface PropsPagination {
    forwardPage: () => void;
    backPage: () => void;
}

export const Pagination = ({ forwardPage, backPage }: PropsPagination) => {
    const { currentPage, totalPage } = useContext(CharacterContext);

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
