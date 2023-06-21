import Infoblock from "./components/Infoblock";
import Title from "./components/Title";
import s from "./modules/App.module.scss";

const App = () => {
  return (
    <div className={s.app}>
      <Title />
      <Infoblock />
    </div>
  );
};

export default App;
