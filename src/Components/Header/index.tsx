import { Container } from "./style";
import { BsSearch } from "react-icons/bs";

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
                    {/* <div className="input">
                        <div className="left">
                            <label htmlFor="search">Search</label>
                            <input type="text" name="search" id="search" />
                        </div>
                        <div className="right">
                            <BsSearch size={20} color={"#e62429"} />
                        </div>
                    </div> */}
                </div>
            </div>
        </Container>
    );
};
