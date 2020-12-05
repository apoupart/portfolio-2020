import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import style from "./aboutMe.module.scss";

const AboutMeComponent = ({ catch_phrase }) => {
  const lineNumberArray = Array(50).fill("");
  const lineNumber = lineNumberArray.map((data, index) => (
    <li key={`line-${index}`}>{index + 1}</li>
  ));
  return (
    <div className={style["about-me"]}>
      <div className={style["about-me__wrapper"]}>
        <div className={style["about-me__dots"]} aria-hidden="true"></div>
        <ul className={style["about-me__sideline"]} aria-hidden="true">
          {lineNumber}
        </ul>

        <ReactMarkdown className={style["about-me__content"]}>
          {catch_phrase}
        </ReactMarkdown>
      </div>
    </div>
  );
};

AboutMeComponent.propTypes = {
  catch_phrase: PropTypes.string.isRequired,
};

export default AboutMeComponent;
