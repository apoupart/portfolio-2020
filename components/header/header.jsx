
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HEADING } from "../../gql/headerContent";
import style from "./header.module.scss";

const HeaderComponent = ({ bannerUrl }) => {
  return (
    <header className={style['header']}>
      <div className={style["header__content"]}>
          <div className={style["header__title-section"]}>
            <h1 className={style['header__title']}>
                Alexandre Poupart
            </h1>
            <h2 className={style['header__subtitle']}>Développeur Front-End <span>//</span> Full-Stack</h2>
          </div>
        <FontAwesomeIcon
          className={style["header__icon-down"]}
          icon={faAngleDown}
        />
      </div>
      <div
        className={style["header__background"]}
        style={{
          backgroundImage: `url(${bannerUrl})`,
        }}
      ></div>
    </header>
  );
};


HeaderComponent.propTypes = {
  bannerUrl: PropTypes.string.isRequired,
};


export default HeaderComponent;
