
import { React, useEffect, useContext } from 'react'

//? Next
import Image from 'next/image';
//? My Components
import { mediaQueries } from '../../../public/utils/data';
//? My Hooks
import { viewportContext } from '../../components/Resize/Resize';
//? Styles
import styles from './ImageSection.module.css'


const ImageSection = (props) => {
    const { width } = useContext(viewportContext);
    let { mobile, ipad, laptop, desktop } = mediaQueries;

    const { imageLeft, title, image, text } = props;

    return (
        <div className={ styles.image_section }  >
            <div className={ styles.image_section__top } ></div>
            {
                imageLeft || width < laptop ?
                    <div className={ styles.image_section__left }>
                        <Image
                            src={ image }
                            alt="soccer image1"
                            layout='intrinsic'
                            width={ 500 }
                            height={ 500 }
                            placeholder={ 'empty' }
                            quality='10'
                            loading='eager'
                        ></Image>
                    </div>
                    :
                    <div className={ styles.image_section__left }>
                        <div className={ styles.image_section__text_container } >
                            <h1 className='title'>{ title }</h1>
                            <p>{ text }</p>
                        </div>
                    </div>
            }
            <div className={ styles.image_section__spc } ></div>
            {
                imageLeft || width < laptop ?
                    <div className={ styles.image_section__right } >
                        <div className={ styles.image_section__text_container }>
                            <h1>{ title }</h1>
                            <p>{ text }</p>
                        </div>
                    </div>
                    :
                    <div className={ styles.image_section__right } >
                        <Image
                            src={ image }
                            alt="soccer image2"
                            layout='intrinsic'
                            width={ 500 }
                            height={ 500 }
                            placeholder={ 'empty' }
                            quality='10'
                            loading='eager'
                        ></Image>
                    </div>
            }
            <div className={ styles.image_section__bottom } ></div>
        </div >
    )
}

export default ImageSection;




// A.B. Soccer Training offers professional training and development to athletes all ages starting at 3+ . We offer the opportunity to enhance your agility, speed, strength, and conditioning so that you may compete at a higher level and reach your maximum potential. Also, we specialize in both advance and recreational training while promoting good health, sportsmanship and discipline to all of our athletes. Why wait? Elevate your game now.

