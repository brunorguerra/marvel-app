import styled from "styled-components";

export const Container = styled.section`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 10rem 0;
    .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 1.6rem;
            &:first-child {
                color: var(--red);
            }
            &:last-child {
                color: var(--gray-text);
            }
        }
    }
    .contentHome {
        margin-top: 4rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }
`;
