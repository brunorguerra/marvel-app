import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/Api";

type CharacterContextProps = {
    children?: React.ReactNode;
};

type CharactersData = {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    urls: [{ type: string; url: string }];
};

interface CharacterContextData {
    characterList: CharactersData[];
    totalCharacters: number;
    valueInput: string;
    handleSearch: boolean;
    isLoading: boolean;
    currentPage: number;
    totalPage: number;
    setCharacterList: (state: []) => void;
    setTotalCharacters: (state: number) => void;
    setValueInput: (state: string) => void;
    setHandleSearch: (state: boolean) => void;
    setIsLoading: (state: boolean) => void;
    setCurrentPage: (state: number) => void;
    setTotalPage: (state: number) => void;
}

export const CharacterContext = createContext({} as CharacterContextData);

export const CharacterProvider = ({ children }: CharacterContextProps) => {
    const [characterList, setCharacterList] = useState([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [valueInput, setValueInput] = useState("");
    const [handleSearch, setHandleSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        api.get("/characters", {
            params: {
                offset: 9 * currentPage,
                nameStartsWith: valueInput || null,
            },
        })
            .then((response) => {
                setIsLoading(false);
                setHandleSearch(false);
                setCharacterList(response.data.data.results);
                setTotalCharacters(response.data.data.total);
                setTotalPage(Number(response.data.data.total) / 9);
                console.log(Math.ceil(Number(response.data.data.total) / 9));
                currentPage * 9 > totalCharacters ? setCurrentPage(0) : false;
            })
            .catch((error) => console.log(error));
    }, [totalCharacters, currentPage, handleSearch]);

    return (
        <CharacterContext.Provider
            value={{
                characterList,
                setCharacterList,
                totalCharacters,
                setTotalCharacters,
                valueInput,
                setValueInput,
                handleSearch,
                setHandleSearch,
                isLoading,
                setIsLoading,
                currentPage,
                setCurrentPage,
                totalPage,
                setTotalPage,
            }}
        >
            {children}
        </CharacterContext.Provider>
    );
};
