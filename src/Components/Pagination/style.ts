import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    .pages {
        p {
            display: inline-block;
            font-size: 2.2rem;
            color: var(--black-text);
            margin: 0 1rem;
            &.currentPage {
                color: var(--red);
            }
        }
    }
    button {
        width: 4rem;
        height: 4rem;
        border-radius: 0.4rem;
        background-color: #fff;
        border: 0.5rem solid transparent;

        font-size: 0;
    }
`;
