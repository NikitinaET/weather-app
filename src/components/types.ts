export interface IForecast {
  list: IWeatherParams[];
  city: {
    name: string;
    coord: {
      lat: number;
      lon: number;
    },
    sunrise: number;
    sunset: number;
  };
}

export interface IWeatherParams {
  dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    weather: Array<{
      main: string;
      description: string;
    }>;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    dt_txt: string;
}
