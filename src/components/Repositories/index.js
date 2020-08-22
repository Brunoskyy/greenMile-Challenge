/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { AiFillStar } from 'react-icons/ai'

function Repositories(props) {
    function handleLike(e) {
        console.log(e.target);
        const starSvg = document.querySelector('.star-svg') 
        if(e.target == starSvg) {
            e.target.style.fill == "yellow" ? e.target.style.fill = "#888" : e.target.style.fill = "yellow" 
        } else {
            e.target.style.fill == "yellow" ? e.target.style.fill = "#888" : e.target.style.fill = "yellow" 
        }
    }

    // console.log(props.repositories.svn_url);
    return (
        <div className="repositorie-info" key={props.repositories.id}>
            <a  className="repositorie-name"
            href={props.repositories.svn_url} 
            target="_blank" >{props.repositories.owner.login} / {props.repositories.name}
            </a>
            <AiFillStar className="star-svg" style={{ stroke: "#888", fill: "#888"}} onClick={handleLike}/>
        </div>
    )
}

export default Repositories;