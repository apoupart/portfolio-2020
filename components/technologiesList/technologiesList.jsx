import { useQuery } from "@apollo/react-hooks";
import style from "./technologiesList.module.scss";
import TechnologyButtonComponent from "../technologyButton/technologyButton";
import { TECHNOLOGIES } from "../../gql/technologies";

const TechnologiesListComponent = ({ onClickEvent, selectedTechnology }) => {
  const { loading, error, data } = useQuery(TECHNOLOGIES);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading via TechnologiesLists...</h1>;
  return (
    <>
      <ul className={style["technologies-list"]}>
        {data.technologies.map((data) => (
          <li key={data.id}>
            <TechnologyButtonComponent technology={data} onClickEvent={onClickEvent} selectedTechnology={selectedTechnology} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechnologiesListComponent;
