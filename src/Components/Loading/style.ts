import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);

    display: flex;
    align-items: center;
    justify-content: center;
    #circleLoading {
        animation-name: rotateLoading;
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        color: var(--red);
    }
    @keyframes rotateLoading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
