import { Container } from "./style";

interface PropsCharacter {
    nameCharacter: string;
    descriptionCharacter: string;
    urlImage: string;
    urlUtils: [{ type: string; url: string }];
}

export const CardCharacter = ({
    nameCharacter,
    descriptionCharacter,
    urlImage,
    urlUtils,
}: PropsCharacter) => {
    return (
        <Container image={urlImage}>
            <div className="image">
                <div className="img"></div>
                <div className="links">
                    {urlUtils.map((url) => {
                        return (
                            <a href={url.url} target="_blank">
                                {url.type === "comiclink"
                                    ? "comics and series"
                                    : url.type}
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="content">
                <h3 title={nameCharacter}>{nameCharacter}</h3>
                <p title={descriptionCharacter}>{descriptionCharacter}</p>
            </div>
        </Container>
    );
};
