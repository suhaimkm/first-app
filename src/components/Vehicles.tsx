import prop from '../model/vechile';
function Vehicles(prop : prop) {
    return (
        <div>
            <h1 className="bg-danger">{prop.title}</h1>
            <ul className="list-group list-group-vertical">
                {prop.items.map((vehicle) => (
                    <li className="list-group-item">{vehicle}</li>
                ))}
            </ul>
        </div>
    );
    
}
export default Vehicles;