
import { react, useState } from "react";
import reactDom from "react-dom";
import Button from "../Buttons/Button";

import styles from './Modal.module.css'

function ModalContainer({ setOpen, data, setData }) {
    const [ localData, setLocalData ] = useState(data);
    const { clicks } = localData;
    function close() {
        setOpen(false);
    }
    function submit() {
        setData({
            clicks,
        });
        close();
    }
    const content = new Array(1).fill(
        <iframe className={ styles.iframe } src={ "https://booking.setmore.com/scheduleappointment/2642c2f4-8344-463b-ac36-a3b9e0134830" } />
    );
    return reactDom.createPortal(
        <>
            <div className={ styles.modal__shadow } onClick={ close } />
            <div className={ styles.modal__container }>
                <div className={ styles.modal__banner } >
                    <p className={ styles.modal__banner_text }>Book Your Appointment</p>
                    <button className={ styles.modal__button } onClick={ submit }> X </button>
                </ div>
                <div className={ styles.modal__content }>
                    { content }
                </div>
                {/* <div className={ styles.ModalFooter }>
                    <button className={ styles.ConfirmButton } onClick={ submit }> X </button>
                </div> */}
            </div>
        </>,
        document.getElementById('app-modal'),
    );
}
export function ModalExample(props) {
    const [ open, setOpen ] = useState(false);
    const [ data, setData ] = useState({ clicks: 0 });
    return (
        <div className={ styles.modal__bar }>
            {/* <div>Clicks: { data.clicks }</div> */ }
            <Button className={ styles.main__button }
                clickProp={ () => {
                    setOpen(true);
                } }
            >
                <span className={ styles.button__text }>BOOK NOW</span>
            </Button>
            { open && (
                <ModalContainer
                    { ...props }
                    setOpen={ setOpen }
                    data={ data }
                    setData={ setData }
                />
            ) }
        </div>
    );
}
