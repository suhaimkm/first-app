import { useState } from "react";

const On = () => {
    const [isON, setIsOn] = useState<boolean>(false);
    
    return (
        <div>
            <h2>status:{isON ? "on" : "off"} </h2>
            <button className=" bg-primary" onClick={() => setIsOn(!isON)}>button</button>


            
        </div>
    );
};
export default On;