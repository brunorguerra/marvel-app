import styled from "styled-components";

export const Container = styled.section`
    width: min(110rem, 90%);
    margin: 0 auto;
    padding: 5rem 0;
    .searchInput {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5rem;
        form {
            height: 4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            border: 0;
            overflow: hidden;
            border: 0.2rem solid var(--gray-text);
            input {
                font-size: 1.5rem;
                outline: none;
                height: 100%;
                padding: 0 1rem;
            }
            button {
                width: 4rem;
                height: 100%;
                font-size: 0;
            }
        }
    }
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
