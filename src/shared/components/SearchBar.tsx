import { useState } from "react";

interface Props {
    input_placeholder?: string;
    button_text: string;
    onQuery: (query: string) => void;
}

export default function SearchBar( { input_placeholder = 'Buscar', button_text, onQuery }: Props ) {
  
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    onQuery(query);
    //setQuery('');
  };

  const handleKeyDown = ( event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="search-container">
      <input 
      type="text" 
      placeholder= {input_placeholder} 
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      onKeyDown={ handleKeyDown }
      />
      <button onClick={handleSearch}> {button_text} </button>
    </div>
  );
}
