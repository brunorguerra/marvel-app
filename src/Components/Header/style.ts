import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 2rem 0 0;
    background-color: var(--background500);
    .content {
        width: min(110rem, 90%);
        height: 100%;
        margin: 0 auto;

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        gap: 4rem;
        @media (max-width: 450px) {
            flex-direction: column;
            justify-content: center;
        }
        .createdFor {
            p {
                font-size: 1.8rem;
                text-transform: uppercase;
                color: var(--gray-text);
                a {
                    color: var(--red);
                    transition: all 0.2s ease;
                    text-decoration: underline;
                    &:hover {
                        color: var(--redHover);
                    }
                }
            }
        }
    }
    .searchCharacters {
        margin-top: 2rem;
        padding: 1.5rem 2rem;
        width: 100%;
        background-color: var(--backgroundWhite);
        .contentBoxSearch {
            width: min(110rem, 90%);
            margin: 0 auto;
            display: flex;
            flex-flow: row wrap;
            row-gap: 1rem;
            column-gap: 4rem;
            align-items: center;
            justify-content: space-between;
            h2 {
                font-size: 2rem;
                color: var(--gray-text);
            }
            .input {
                display: flex;
                align-items: center;
                .left {
                    width: 15rem;
                    height: 4rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    label {
                        display: block;
                        font-size: 1.3rem;
                        font-weight: bold;
                        color: var(--red);
                        margin-bottom: 0.5rem;
                    }
                    input {
                        height: 0;
                        width: 100%;
                        border-bottom: 0.2rem solid var(--red);
                        outline: 0;
                        transition: all 0.2s ease;
                        &:focus {
                            height: 100%;
                        }
                    }
                }
                .right {
                    cursor: pointer;
                    width: 4rem;
                    height: 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
`;
