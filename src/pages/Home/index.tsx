import { Banner } from "../../Components/Banner";
import { CardCharacter } from "../../Components/CardCharacter/index";
import { Container } from "./style";
import { Pagination } from "../../Components/Pagination";
import { useContext } from "react";
import { CharacterContext } from "../../contexts/CharacterContext";
import { Loading } from "../../Components/Loading";

import { BiSearch } from "react-icons/bi";

interface PropsInput {
    target: {
        value: string;
    };
}

export const Home = () => {
    const {
        characterList,
        totalCharacters,
        isLoading,
        currentPage,
        setValueInput,
        setCurrentPage,
        setHandleSearch,
    } = useContext(CharacterContext);

    function forwardPage() {
        totalCharacters - (currentPage + 1) * 9 < 0
            ? setCurrentPage(currentPage)
            : setCurrentPage(currentPage + 1);
    }
    function backPage() {
        currentPage > 0 ? setCurrentPage(currentPage - 1) : setCurrentPage(0);
    }
    function findCharacter() {
        setHandleSearch(true);
    }
    function onChange(evInput: PropsInput) {
        setValueInput(evInput.target.value);
    }

    return (
        <>
            <Banner />
            <Container>
                <div className="searchInput">
                    <form
                        action=""
                        onSubmit={(e) => {
                            e.preventDefault();
                            findCharacter();
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search character"
                            onChange={(e) => onChange(e)}
                        />
                        <button type="submit">
                            <BiSearch size={30} />
                        </button>
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
                    {characterList.map((character) => {
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
                    {isLoading && <Loading />}
                </div>
                <Pagination forwardPage={forwardPage} backPage={backPage} />
            </Container>
        </>
    );
};
