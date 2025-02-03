import { useState } from "react";
import './UserStatus.css'

const UserStatus = () => {
    const [user, setUser] = useState({ name: "", email: "", age: "" ,mob:"",address:"",course:"" });

    return (
        <div>
            <form action="">
            <input type="text"
                value={user.name}
                placeholder="name"
                    onChange={(event) => setUser({ ...user, name: event.target.value })} />
                
            <input type="text"
                value={user.age}
                placeholder="age"
                onChange={(event) => setUser({ ...user, age: event.target.value })} />
            <input type="text"
                value={user.email}
                placeholder="email"
                onChange={(event) => setUser({ ...user, email: event.target.value })} />
            <input type="text"
                value={user.mob}
                placeholder="mobile"
                onChange={(event) => setUser({ ...user, mob: event.target.value })} />
            <input type="text"
                value={user.address}
                placeholder="address"
                onChange={(event) => setUser({ ...user, address: event.target.value })} />
            <input type="text"
                value={user.course}
                placeholder="course"
                onChange={(event) => setUser({ ...user, course: event.target.value })} />
            <p>name:{user.name}
                <br />
                age:{user.age}
                <br />
                email:{user.email}
                <br />
                mob:{user.mob}
                <br />
                address:{user.address}
                <br />
                course:{user.course}
            
</p>
</form>
        </div>
    );
};
export default UserStatus;