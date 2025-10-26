interface Props {
    title: string;
    searches: string[];
    OnLabelClicked: (term:string) => void;
}

export default function PreviousSearch( { title, searches, OnLabelClicked }: Props ) {
  return (
    <div className="previous-searches">
      <h2> {title} </h2>
      <ul className="previous-searches-list">
        {searches.map((term)=>(
          <li key={term} onClick={() => OnLabelClicked(term) } > {term} </li>
        ))}
      </ul>
    </div>
  );
}
