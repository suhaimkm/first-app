import { useEffect,useState } from "react";

function UserList() {
    const [Users, setUsers] = useState<User[]>([]);
    interface User {
        id: number;
        name: string;
        username: string;
        email: string;
        website: string;
    }


    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }
    useEffect(() => {
        fetchUsers();
    });



    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">website</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        
        </div>
    );
    
}
export default UserList;