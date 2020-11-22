import { useQuery } from "@apollo/react-hooks";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import { HEADING } from "../../gql/headerContent";
import style from "./header.module.scss";

const Header = () => {
  const { loading, error, data } = useQuery(HEADING);
  if (error) return <h1>Error with header component</h1>;
  if (loading) return <h1>Loading the heading...</h1>;
  return (
    <header className={style['header']}>
      <div className={style["header__content"]}>
        <h1 className={style['header__title']}>
          <ReactMarkdown>{data.content.catch_phrase}</ReactMarkdown>
        </h1>
        <FontAwesomeIcon
          className={style["header__icon-down"]}
          icon={faAngleDown}
        />
      </div>
      <div
        className={style["header__background"]}
        style={{
          backgroundImage: `url(${data.content.banner.url})`,
        }}
      ></div>
    </header>
  );
};

export default Header;
