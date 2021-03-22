import React, { useEffect } from 'react';
import imgMap from '../../images/Map.png'
import './Destination.css'

const Destination = (props) => {

    const{name, image, person, price} = props.selectVehicles;
    console.log(props.selectVehicles.name);

    // const handleSearchBtn = () => {
    //     const style = {
    //         display: 'none'
    //     }
    // }

    return (
        <div className="styleDestination">
            <div className="destinationDetailPart">
                <div className="locationPart">
                    <label htmlFor="from">Pick From</label>
                    <input id="from" type="text"/>
                    <label htmlFor="to">Pick To</label>
                    <input id="to" type="text"/>
                    <button style={{display:'block'}} className="btn">Search</button>
                </div>
                <div >
                    <div className="riderOption">
                        <img src={image} alt=""/>
                        <h3>{name}</h3>
                        <p>{person}</p>
                        <p>{price}</p>
                    </div>
                    <div className="riderOption">
                        <img src={image} alt=""/>
                        <h3>{name}</h3>
                        <p>{person}</p>
                        <p>{price}</p>
                    </div>
                    <div className="riderOption">
                        <img src={image} alt=""/>
                        <h3>{name}</h3>
                        <p>{person}</p>
                        <p>{price}</p>
                    </div>
                </div>
            </div>

            <div className="mapPart">
                <img src={imgMap} alt=""/>
            </div>
            
        </div>
    );
};

export default Destination;




