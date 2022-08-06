import React from 'react'
import Image from 'next/image';
import ButtonBlack from '../Buttons/ButtonBlack';
import { ModalExample } from '../Modals/Modal';

import styles from './Cards.module.css'


const Cards = (props) => {
    const { plan, players, price, discount, session, practice } = props.details;
    return (
        <div className={ styles.card__container }>
            <div className={ styles.app_modal } id="app-modal" ></div>
            <div className={ styles.card }>
                <div className={ styles.card_content }>
                    {/* <div className={ styles.card__background }> */ }



                    <div className={ styles.card__layout }>
                        <div className={ styles.card__text }>
                            <p className={ styles.plan }>{ plan }</p>
                            <p className={ styles.price }>{ price }</p>
                            <p className={ styles.players }>Players { players }</p>
                            {
                                discount != 0 &&
                                <p className={ styles.discount }>Save { discount } Today</p>
                            }
                            {
                                session != "" &&
                                <p className={ styles.session }>{ session }</p>
                            }
                            {
                                practice != "" &&
                                <p className={ styles.practice }>{ practice }</p>
                            }
                        </div>
                        <div className={ styles.card__image }>
                            <Image
                                src="/assets/images/logo_only_light.svg"
                                alt="Avatar"
                                height={ 1000 }
                                width={ 1000 }

                                objectfit='contain'

                            />
                        </div>
                    </div>
                    <div className={ styles.card__button }>
                        {/* <ButtonBlack clickProp={ true } ><span className={ styles.card__button_text }>Book Now</span></ButtonBlack> */ }
                        <ModalExample />
                    </div>
                    {/* </div> */ }
                </div>



            </div>
        </div >
    )
}

export default Cards

