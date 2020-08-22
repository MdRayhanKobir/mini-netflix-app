import React from 'react';

function Card(props) {
    return (  
        <div className="card">
            <div className="cards">
            <img className="cardImg" src={props.imgsrc} alt="Card"/>
            <div className="cardInfo">
                <span className="cardCategory">{props.title}</span>
                    <h3 className="cardTitle">{props.sname}</h3>
                <a href={props.link} target="_blank">
               <button>Watch Now</button>
                </a>
            </div>
        </div>
     </div>   
    );
}
export default Card