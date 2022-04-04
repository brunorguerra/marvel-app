import styled from "styled-components";

interface PropsImage {
    image: string;
}

export const Container = styled.div<PropsImage>`
    width: 28rem;
    border-radius: 0 0 2rem 0;
    overflow: hidden;
    cursor: pointer;
    .image {
        height: 30rem;
        overflow: hidden;
        position: relative;
        .img {
            width: 100%;
            min-height: 100%;
            background-image: url(${(props) => props.image});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            transition: all 0.2s ease;
            z-index: 1;
        }
        .links {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;

            width: 100%;
            height: 100%;
            transform: translateY(97%);
            overflow: hidden;

            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            justify-content: center;

            background-color: var(--red);
            transition: 0.7s ease;
            a {
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: bold;
                color: var(--white-text);
            }
        }
    }
    .content {
        padding: 2rem;
        width: 100%;
        height: 20rem;
        background-color: var(--background600);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 2.2rem;
            font-weight: bold;
            color: var(--white-text);
            max-width: 70%;
        }
        p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--gray-text);
        }
    }
    &:hover .image {
        .img {
            transform: scale(1.1);
        }
        .links {
            transform: translateY(0%);
        }
    }
`;
