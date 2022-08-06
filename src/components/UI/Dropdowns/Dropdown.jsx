import React from 'react';
import styles from './Dropdown.module.css'

// const Dropdown = (props) => {
//     return (
//         <div className={ props.cname }>
//             <select className={ styles.dropdown__select }>
//                 <option>What is your training goal?</option>
//                 <option className={ styles.dropdown__option } value="1">Strength & Agility Training</option>
//                 <option className={ styles.dropdown__option } value="2">Striker/Forward Drills</option>
//                 <option className={ styles.dropdown__option } value="2">Center Back/ Defensive Drills</option>
//                 <option className={ styles.dropdown__option } value="2">Goalkeeper Training</option>
//                 <option className={ styles.dropdown__option } value="2">Speed & Conditioning Training</option>
//             </select>
//         </div>
//     )
// };



const Dropdown = (props) => {
    return (
        <div className={ props.cname }>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className={ styles.selectdiv }>
                <label>
                    <select>
                        <option selected>What is your training goal?</option>
                        <option>Strength & Agility Training</option>
                        <option>Striker/Forward Drills</option>
                        <option>Center Back/ Defensive Drills</option>
                        <option>Goalkeeper Training</option>
                        <option>Speed & Conditioning Training</option>
                    </select>
                </label>
            </div>
        </div>
    )
};



export default Dropdown;
