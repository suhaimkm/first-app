import Car from "../model/car";

interface carlist {
    cars: Car[];
}

function Carslist(prop: carlist) {



  return (
    <div className="container mt-5">
      <h2 className= "text-danger">Car List</h2>
      <table className="table ">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Price</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {prop.cars.map((car) => (
            <tr key ={car.id} >
              <td>{car.name}</td>
              <td>{car.price}</td>
              <td>{car.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carslist;