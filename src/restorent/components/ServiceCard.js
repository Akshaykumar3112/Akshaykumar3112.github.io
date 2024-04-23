
import {Link} from 'react-router-dom';
import '../css/restorent.css';
import React from 'react';


function ServiceCard(props){
   
    return(
        <div className="box">
            <Link to={props.link}>
                <img src={props.img} alt=""/>
                <h2 className="h-secondary center">
                    {props.name}
                </h2>
                <p className="center">{props.text}</p>
            </Link>
        </div>
    );
   
}
export default ServiceCard;