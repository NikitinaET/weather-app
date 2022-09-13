import { IWeatherParams } from './types';
import { FC } from "react";
import Compass from './Compass';

interface IProps {
  data: IWeatherParams;
}

const Card:FC<IProps>= (props: IProps) => {
  const dateTime = props.data.dt_txt.split(' ');

  return (
    <div className="flex py-4 px-4 flex-col items-center hover:shadow-lg w-40">
      <p className="text-sm">{dateTime[0]}</p>
      <p className="text-slate-400">{dateTime[1]}</p>
      <img src={`/${props.data.weather[0].main}.svg`}  alt="icon_weather" className="h-20"/>
      <p>{Math.round(props.data.main.temp)}℃</p>
      <p className="text-sm text-slate-400">feels {Math.round(props.data.main.feels_like)}℃</p>
      <p>{props.data.weather[0].description}</p>
      <Compass wind={props.data.wind}/>
    </div>
  )
}
export default Card;