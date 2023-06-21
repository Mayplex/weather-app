import s from "../modules/Details.module.scss";
import Card from "./Card";

const Details = ({ weather }: any) => {
  return (
    <div className={s.container}>
      <h2>Details</h2>
      <div className={s.details_block}>
        <Card subtitle="Timezone">{weather?.location?.tz_id}</Card>
        <Card subtitle="Feelslike">{weather?.current?.feelslike_c}°C</Card>
        <Card subtitle="Humidity">{weather?.current?.humidity}%</Card>
        <Card subtitle="Clouds">{weather?.current?.cloud}%</Card>
        <Card subtitle="Wind">{weather?.current?.wind_mph}mph</Card>
        <Card subtitle="Pressure">{weather?.current?.pressure_mb}mb</Card>
      </div>
    </div>
  );
};

export default Details;
