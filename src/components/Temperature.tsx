import s from "../modules/Temperature.module.scss";
import location from "../assets/images/placeholder.png";

const Temperature = ({ weather }: any) => {
  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className={s.block}>
      <span className={s.title}>
        <img
          style={{ width: "30px", height: "30px" }}
          src={location}
          alt="Location"
        />
        {weather?.location?.name},{weather?.location?.country}
      </span>

      <span className={s.time}>{weather?.location?.localtime}</span>

      <img
        style={{ width: "100px", height: "100px" }}
        src={weather?.current?.condition.icon}
        alt="Weather Icon"
      />

      <span className={s.temp}>{weather?.current?.temp_c}°C</span>

      <span className={s.subtitle}>{weather?.current?.condition.text}</span>
    </div>
  );
};

export default Temperature;
