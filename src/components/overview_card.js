import React from 'react';
import OverviewCard_Logo from '../img/logo.png'

const OverviewCard = (props) => (

    <div class="card container ">
    <h3>{props.cardTitle}</h3>
    <img src={OverviewCard_Logo} alt=" "/>
    <p>{props.cardDescription}</p>
</div>

);


export default OverviewCard;