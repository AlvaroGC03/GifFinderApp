import GifList from "./gifs/components/GifList";
import PreviousSearch from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setpreviousTerms] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = (query: string) => {
    console.log({ query });
  };

  return (
    <>
      {/*Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y Comparto el Gif perfecto"
      />

      {/* Search */}
      <SearchBar
        input_placeholder="Buscar Gifs..."
        button_text="Buscar"
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      <PreviousSearch
        title="Busquedas previas"
        searches={["Goku", "luffy"]}
        OnLabelClicked={handleTermClicked}
      />

      {/* GIFS */}
      <GifList gifs={mockGifs} />
    </>
  );
};
