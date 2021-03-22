import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = (props) => {
    const vehicles = [
        {
          name: "Bike",
          image: "https://i.ibb.co/ZJYcbRc/Frame.png",
          person: 2,
          price: 26,
          key: 1
        },
        {
          name: "Bus",
          image: "https://i.ibb.co/djhQjCY/Frame-1.png",
          person: 36,
          price: 85,
          key: 2
        },
        {
          name: "Train",
          image: "https://i.ibb.co/GfZS0NV/Group.png",
          person: 27,
          price: 120,
          key: 3
        },
        {
          name: "Car",
          image: "https://i.ibb.co/gt0nr1p/Frame-2.png",
          person: 4,
          price: 67,
          key: 4
        },
      ];

      // const[selectVehicle, setSelectVehicle] = useState([])

    return (
        <div className='styleHome'>
            {
                vehicles.map(vehicle => 
                    <div onClick={() => props.vehicleHandler(vehicle) } key = {vehicle.key}>
                        <Link to='./Destination'>
                          <div className='vehicleCart'>
                            <img style={{height:'150px'}} src={vehicle.image} alt="img" />
                            <p>{vehicle.name}</p>
                          </div>
                        </Link>
                    </div> )
            }
        </div>
    );
};

export default Home;