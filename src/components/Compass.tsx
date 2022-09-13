import { Icon } from '@iconify/react';
import { transform } from 'typescript';

interface Props {
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}

const Compass = (props:Props) => {
  return (
  <div className="flex items-center flex-col">
    <h3>WIND</h3>
    <div className="border-2 border-black rounded-full p-2">
      <Icon icon="akar-icons:arrow-down" style={{ transform: `rotateZ(${props.wind.deg}deg)` }} className="w-10 h-10"/>
    </div>
    
    <p className="text-sm">Max: {Math.round(props.wind.gust * 10) / 10} m/s</p>
    <p className="text-sm">Speed: {Math.round(props.wind.speed * 10) / 10} m/s</p>
    {/* <div className="w-20 border-t border-gray-600 after:border-t after:border-gray-600 after:rotate(-45deg)"></div> */}
  </div>
  )
}
export default Compass;