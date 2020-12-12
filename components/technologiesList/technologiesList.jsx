import { useQuery } from "@apollo/react-hooks";
import { TECHNOLOGIES } from "../../gql/technologies";

const TechnologiesListComponent = ({onClickEvent}) => {
  const { loading, error, data } = useQuery(TECHNOLOGIES);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading via TechnologiesLists...</h1>;
  return (
    <>
      tech--
      {data.technologies.map((data) => (
        <ul key={data.id}>
          <li>
            <button onClick={() => onClickEvent(data.slug)}>
              {data.name}
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default TechnologiesListComponent;
