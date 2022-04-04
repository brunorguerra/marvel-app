import { useEffect, useState } from "react";
import api from "../../services/Api";

import { Banner } from "../../Components/Banner";
import { CardCharacter } from "../../Components/CardCharacter/index";
import { Container } from "./style";
import { Pagination } from "../../Components/Pagination";

interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    urls: [{ type: string; url: string }];
}

interface PropsInput {
    target: {
        value: string;
    };
}

export const Home = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [valueInput, setValueInput] = useState("");

    useEffect(() => {
        api.get("/characters", {
            params: {
                offset: 9 * currentPage,
                nameStartsWith: valueInput || null,
            },
        })
            .then((response) => {
                console.log(response.data);
                setCharacters(response.data.data.results);
                setTotalCharacters(response.data.data.total);
                currentPage * 9 > totalCharacters ? setCurrentPage(0) : false;
            })
            .catch((error) => console.log(error));
    }, [totalCharacters, currentPage, valueInput]);

    function forwardPage() {
        totalCharacters - (currentPage + 1) * 9 < 0
            ? setCurrentPage(currentPage)
            : setCurrentPage(currentPage + 1);
    }
    function backPage() {
        currentPage > 0 ? setCurrentPage(currentPage - 1) : setCurrentPage(0);
    }

    function onChange(evInput: PropsInput) {
        console.log(evInput.target.value);
        setValueInput(evInput.target.value);
    }

    return (
        <>
            <Banner />
            <Container>
                <div className="searchInput">
                    <form action="">
                        <input
                            type="text"
                            placeholder="Search character"
                            onChange={(e) => onChange(e)}
                        />
                    </form>
                </div>
                <div className="title">
                    <p>Page {currentPage + 1}</p>
                    <p>
                        Results{" "}
                        {totalCharacters < 10
                            ? `0${totalCharacters}`
                            : totalCharacters}
                    </p>
                </div>
                <div className="contentHome">
                    {characters.map((character) => {
                        return (
                            <CardCharacter
                                nameCharacter={character.name}
                                descriptionCharacter={
                                    character.description ||
                                    `Hero ${character.name}`
                                }
                                urlImage={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                key={character.id}
                                urlUtils={character.urls}
                            />
                        );
                    })}
                </div>
                <Pagination
                    currentPage={currentPage}
                    forwardPage={forwardPage}
                    backPage={backPage}
                />
            </Container>
        </>
    );
};
