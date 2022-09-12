import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as forecastJSON from '../forecast.json'
import Card from './Card';
import { IForecast, IWeatherParams } from './types';

const CardWrapper = () => {
  const [forecast, setForecast] = useState<IForecast | null>(null);
  useEffect(() => {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.7239&lon=37.7708&units=metric&appid=f6647714a7a3ee023c778917a1b760b2';
    axios.get(url).then(res => { setForecast(res.data); });
    // setForecast(forecastJSON);
  }, []);
  const dateList: IWeatherParams[][] = [];
 
  let listIndex = 0;
  dateList[listIndex] = [];
  forecast?.list.forEach(entry => {
    dateList[listIndex].push(entry);
    if (entry.dt_txt.includes('21:00')) {
      listIndex += 1;
      dateList[listIndex] = [];
    }
  });

  return (
    <div className="bg-sky-100 ">
      <h1 className="font-black font-serif text-2xl mb-10">ПРОГНОЗ ПОГОДЫ НОВОРОССИЙСК</h1>
      {/* <div className="flex flex-wrap">
        {forecast?.list.map((card) => (
          <Card key={card.dt} data={card} />
        ))}
      </div> */}
      {dateList.map(list => (
        <div className="flex flex-wrap mb-5 justify-around" key={list[0]?.dt_txt}>
          {list.map(card => (
            <Card key={card.dt} data={card} />
          ))}
        </div>
      ))}
      <div className=""></div>
    </div>
  );
}
export default CardWrapper;