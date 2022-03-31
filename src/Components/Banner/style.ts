import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding: 20rem 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    background: red url(./banner.png) no-repeat center/cover;
    h1 {
        font-size: 5rem;
        color: var(--white-text);
        text-transform: uppercase;
        letter-spacing: 1rem;
        padding: 2rem 0;
        position: relative;
        &::after {
            content: "MARVEL";
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: initial;
            color: var(--red);

            position: absolute;
            top: 0;
            right: 1rem;
        }
    }
`;
