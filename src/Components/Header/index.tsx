import { Container } from "./style";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export const Header = () => {
    return (
        <Container>
            <div className="content">
                <div className="createdFor">
                    <p>
                        Created by{" "}
                        <a href="https://www.bruno-guerra.dev">Bruno Guerra</a>
                    </p>
                </div>

                <a href="https://developer.marvel.com/">
                    <img
                        src="./marvelLogoHeader.svg"
                        alt="Logo da Marvel em Vermelho"
                        title="Ir para o site da Marvel"
                    />
                </a>
            </div>

            <div className="searchCharacters">
                <div className="contentBoxSearch">
                    <h2>Find Character</h2>
                    {/* <form action="">
                        <input type="text" placeholder="Search character" />
                        <button
                            type="submit"
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <BsSearch size={20} />
                        </button>
                    </form> */}
                </div>
            </div>
        </Container>
    );
};
