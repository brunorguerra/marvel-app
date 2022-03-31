import { Container } from "./style";

interface PropsCharacter {
    nameCharacter: string;
    descriptionCharacter: string;
    urlImage: string;
}

export const CardCharacter = ({
    nameCharacter,
    descriptionCharacter,
    urlImage,
}: PropsCharacter) => {
    return (
        <Container image={urlImage}>
            <div className="image">
                <div className="img"></div>
            </div>
            <div className="content">
                <h3>{nameCharacter}</h3>
                <a href="" title={descriptionCharacter}>
                    {descriptionCharacter}
                </a>
            </div>
        </Container>
    );
};
