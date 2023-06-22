import Infoblock from "./components/Infoblock";
import Title from "./components/Title";
import { ContextProvider } from "./context/Context";
import s from "./modules/App.module.scss";

const App = () => {
  return (
    <div className={s.app}>
      <ContextProvider>
        <Title />
        <Infoblock />
      </ContextProvider>
    </div>
  );
};

export default App;
