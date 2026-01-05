import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import GifList from "./gifs/components/GifList";
import PreviousSearch from "./gifs/components/PreviousSearch";
import { mockGifs, type Gif } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import { useState } from "react";

export const GifsApp = () => {
  
  const [gifs, setGifs] = useState <Gif[]>([]);

  const [previousTerms, setpreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string = '') => {
    console.log({ term });
  };

  const handleSearch = async (query: string) => {
    query.toLowerCase();
    if (query.length === 0) return;
    if ( previousTerms.includes(query) ) return;
    setpreviousTerms( [query, ...previousTerms].slice(0,7 ) );

    const gifs = await getGifsByQuery(query);

    setGifs(gifs)
    
    
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
        searches={previousTerms}
        OnLabelClicked={handleTermClicked}
      />

      {/* GIFS */}
      <GifList gifs={gifs} />
    </>
  );
};
