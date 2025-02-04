import { useState } from "react";
import './UserStatus.css'

const UserStatus = () => {
    const [user, setUser] = useState({ name: "", email: "", age: "" ,mob:"",address:"",course:"" });

    return (
        <div>
            
            <form action="">
            <h1>login form</h1>
            <p>name:{user.name}</p>
            <input type="text"
                value={user.name}
                placeholder="name"
                    onChange={(event) => setUser({ ...user, name: event.target.value })} />
                
            <p>age:{user.age}</p>  
            <input type="number"
                value={user.age}
                placeholder="age"
                    onChange={(event) => setUser({ ...user, age: event.target.value })} />
            <p>email:{user.email}</p>
            <input type="text"
                value={user.email}
                placeholder="email"
                    onChange={(event) => setUser({ ...user, email: event.target.value })} />
            <p>mob:{user.mob}</p>
            <input type="text"
                value={user.mob}
                placeholder="mobile"
                    onChange={(event) => setUser({ ...user, mob: event.target.value })} />
            <p>address:{user.address}</p>
            <input type="text"
                value={user.address}
                placeholder="address"
                    onChange={(event) => setUser({ ...user, address: event.target.value })} />
            <p>course:{user.course}</p>
            <input type="text"
                value={user.course}
                placeholder="course"
                    onChange={(event) => setUser({ ...user, course: event.target.value })} />
            <button className="bg-primary">submit</button>
          
</form>
        </div>
    );
};
export default UserStatus;