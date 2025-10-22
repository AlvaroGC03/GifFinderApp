interface Props {
    input_placeholder?: string;
    button_text: string;
}

export default function SearchBar( { input_placeholder = 'Buscar', button_text }: Props ) {
  return (
    <div className="search-container">
      <input type="text" placeholder= {input_placeholder} />
      <button> {button_text} </button>
    </div>
  );
}
