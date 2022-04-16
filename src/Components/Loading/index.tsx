import { Container } from "./style";
import { BiLoaderAlt } from "react-icons/bi";

export const Loading = () => {
    return (
        <Container>
            <BiLoaderAlt size={60} id="circleLoading" />
        </Container>
    );
};
