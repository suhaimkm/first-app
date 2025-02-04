import { useState } from "react";
import onImg from '../assets/on.jpg';
import offImg from '../assets/off.jpg';

const Bulb = () => {
    const [isON, setIsOn] = useState<boolean>(true);

    return (
        <div>
            <img src={isON ? onImg : offImg} alt="bulb" onClick={() => setIsOn(!isON)} />
            <h2>{isON ? 'on' : 'off'}</h2>
          
        </div>
    );
};
export default Bulb;