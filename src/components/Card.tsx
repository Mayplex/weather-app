import { CardProps } from "../types/CardProps";
import s from "../modules/Card.module.scss";

const Card: React.FC<CardProps> = ({ subtitle, children }) => {
  return (
    <div className={s.card}>
      <h3 className={s.subtitle}>{subtitle}</h3>
      {children}
    </div>
  );
};
export default Card;
