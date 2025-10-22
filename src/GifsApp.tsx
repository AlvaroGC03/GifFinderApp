import GifList from "./gifs/components/GifList";
import PreviousSearch from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      {/*Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y Comparto el Gif perfecto"
      />

      {/* Search */}
      <SearchBar input_placeholder="Buscar Gifs..." button_text="Buscar" />

      {/* Busquedas previas */}
      <PreviousSearch title="Busquedas previas" />

      {/* GIFS */}
      <GifList gifs={mockGifs} />
    </>
  );
};
