import axios from "axios";
import { createContext, ReactNode, useState } from "react";

type SharedData = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  weather: WeatherResponse[];
  setWeather: React.Dispatch<React.SetStateAction<WeatherResponse[]>>;
  getData: () => Promise<void>;
};

type ContextProviderProps = {
  children: ReactNode;
};

interface LocationData {
  name: string;
  country: string;
  tz_id: string;
  localtime: string;
}

interface ConditionData {
  text: string;
  icon: string;
}

interface CurrentData {
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: ConditionData;
  wind_mph: number;
  pressure_mb: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
}

interface WeatherResponse {
  location: LocationData;
  current: CurrentData;
}

const Context = createContext<SharedData | undefined>(undefined);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [value, setValue] = useState("Krakov");
  const [weather, setWeather] = useState<WeatherResponse[]>([]);

  const getData = async () => {
    const res = await axios.get<WeatherResponse[]>(
      `http://api.weatherapi.com/v1/current.json?key=e87949e9799246fd969134321232106&q=${value}&aqi=no`
    );
    setWeather(res.data);
  };

  const sharedData: SharedData = {
    value,
    setValue,
    weather,
    setWeather,
    getData,
  };

  return <Context.Provider value={sharedData}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
