import { useContext } from "react";
import QueryContext from "../../../../context/QueryContext";

function QueryComponent(query) {
  const { selectedQuery, setSelectedQuery } = useContext(QueryContext);

  return (
    <button
      style={{ color: "#58c132", fontSize: "1.3rem", width: "20%" }}
      key={query.id}
      title={query.name}
      onClick={() => setSelectedQuery(query)}
    >
      Query {query.id}
    </button>
  );
}

export default QueryComponent;
