import styled from "styled-components";

interface PropsImage {
    image: string;
}

export const Container = styled.div<PropsImage>`
    width: 28rem;
    border-radius: 0 0 2rem 0;
    overflow: hidden;
    .image {
        height: 30rem;
        overflow: hidden;
        border-bottom: 0.7rem solid var(--red);
        .img {
            width: 100%;
            min-height: 100%;
            background-image: url(${(props) => props.image});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            transition: all 0.2s ease;
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
            font-size: 2.2rem;
            font-weight: bold;
            color: var(--white-text);
            max-width: 50%;
        }
        a {
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
    }
`;
