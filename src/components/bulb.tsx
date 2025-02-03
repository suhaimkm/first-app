import { useState } from "react";

const bulb = () => {
    const [isON, setIsOn] = useState<boolean>(false);
    
    return (
        <div>
            <h2>status:</h2>
            <button className=" bg-primary" onClick={() => setIsOn(!isON)}>bulb</button>


            
        </div>
    );
};
export default bulb;