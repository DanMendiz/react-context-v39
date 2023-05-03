import React, { useContext } from 'react';
import { CarsContext } from './contexts/Cars.context';

function AddCar() {
  const { fetchCars } = useContext(CarsContext);
  console.log(fetchCars);

  // const newCar = {
  //   name: 'New_Car',
  //   bhp: 321,
  // };

  return (
    <button onClick={() => fetchCars()} style={{ border: '2px solid blue' }}>
      Load Cars
    </button>
  );
}

export default AddCar;
