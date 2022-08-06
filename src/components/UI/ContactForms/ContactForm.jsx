import { React, useState, useRef } from 'react';
import styles from './ContactForm.module.css'
import Button from '../Buttons/Button';


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

const ContactForm = (props) => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ submitted, setSubmitted ] = useState(false)

    // useEffect(() => {

    // }
    // }, [ emailState ])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        })
    }

    return (
        <div className={ props.cname }>
            <form className={ styles.contact_form } method="post" onSubmit={ handleSubmit }>
                <label className={ styles.contact_form__name_label } htmlFor='name'>
                    NAME *
                </label >
                <br />
                <input className={ styles.contact_form__name_input }
                    type="text"
                    name="name"
                    value={ name }
                    onChange={ (e) => { setName(e.target.value) } }>

                </input>
                <br />
                <label className={ styles.contact_form__email_label } htmlFor='email'>
                    EMAIL *
                </label>
                <br />
                <input
                    className={ styles.contact_form__email_input }
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ (e) => { setEmail(e.target.value) } }>
                </input>
                <br />
                <label className={ styles.contact_form__message_label } htmlFor='message'>
                    MESSAGE
                </label>
                <br />
                <textarea className={ styles.contact_form__message_input }
                    type="text"
                    name="message"
                    value={ message }
                    onChange={ (e) => { setMessage(e.target.value) } }
                />
                <br />
                <br />
                <div className={ styles.contact__button_container }>
                    <Button cname={ styles.contact__button } type="submit" onClick={ (e) => { handleSubmit(e) } }><span className={ styles.button__text }>LETS TALK</span></Button>
                </div>
            </form>
        </div>
    )
};
export default ContactForm;
