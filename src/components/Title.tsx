import s from "../modules/Title.module.scss";
import icon from "../assets/images/umbrella.png";

const Title = () => {
  return (
    <div className={s.title}>
      <h1 className={s.text}>InWeather</h1>
      <img style={{ width: "60px", height: "60px" }} src={icon} alt="" />
    </div>
  );
};

export default Title;
