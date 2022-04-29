import React from 'react';
import './Emp.css';
import image from "../../resources/Logo.png";

function Emp(props) {
  return (
    <div className='container container_'>
        <div className='outer_ row'>
            <div className='left col-xs-12 col-lg-4'>
                <img src={image}></img>
            </div>
            <div className='middle col-xs-12 col-md-4'>
                <h3>{props.name}</h3>
                <h5>{props.des}</h5>
                
            </div>
            <div className='middle col-xs-12 col-md-4'>
                <h5>{props.dept}</h5>
                <h5>{props.Email}</h5>
            </div>
        </div>
    </div>
  )
}

export default Emp