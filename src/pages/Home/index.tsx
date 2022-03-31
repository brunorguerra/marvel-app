import { Banner } from "../../Components/Banner";
import { CardCharacter } from "../../Components/CardCharacter/index";
import { Container } from "./style";

import { useEffect, useState } from "react";
import api from "../../services/Api";

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export const Home = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);

    useEffect(() => {
        api.get("/characters")
            .then((response) => {
                setCharacters(response.data.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Banner />
            <Container>
                <div className="title">
                    <p>Page 1</p>
                    <p>
                        Results{" "}
                        {characters.length < 10
                            ? `0${characters.length}`
                            : characters.length}
                    </p>
                </div>
                <div className="contentHome">
                    {characters.map((character, index) => {
                        return (
                            <CardCharacter
                                nameCharacter={character.name}
                                descriptionCharacter={
                                    character.description ||
                                    `Hero ${character.name}`
                                }
                                urlImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                key={0 + index}
                            />
                        );
                    })}
                </div>
            </Container>
        </>
    );
};
