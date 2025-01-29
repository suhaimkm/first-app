import React from "react";

function Carslist(){
const Cars = [
  { id: 1 ,name: "Tesla Model S", price: "$80,000", model: "2023" },
  { id :2 ,name: "BMW X5", price: "$60,000", model: "2022" },
  { id :3 ,name: "Audi A4", price: "$40,000", model: "2021" },
  { id :4 ,name: "Mercedes-Benz C-Class", price: "$45,000", model: "2021" },
];


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
          {Cars.map((car) => (
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

