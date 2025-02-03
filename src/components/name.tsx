import { useState } from "react";

const Name = () => {
    const [name, setName] = useState("");
    
    return (
        <div>
            <h1>your name:{name}</h1>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            
           
        
        </div>
    );
};
export default Name;