import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>count:{count}</h1>
            <button className=" bg-primary" onClick={() => setCount(count + 2)}>Increment</button>
            <button className="bg-danger" onClick={() => setCount(count - 2)}>decrement</button>
        </div>
    );
};
export default Count;