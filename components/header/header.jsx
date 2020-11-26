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
          <div className={style["header__title-section"]}>
            <h1 className={style['header__title']}>
                Alexandre Poupart
            </h1>
            <h2 className={style['header__subtitle']}>Développeur Front-End <span>//</span> Full Stack</h2>
          </div>
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
