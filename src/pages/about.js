import React from "react";

import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={ styles.about__container }>
            <div className={ styles.about__title }>
                <h1>Coach Brown</h1>
            </div>
            <div className={ styles.about__text }>
                <p>
                    My passion for soccer (football) developed when I was 4 years old living in Kingston, Jamaica.
                    Residing in a poor world country was hard sometimes, but playing soccer was a form of escape and a way I expressed myself as a child.
                    At 12 years old, my family and I migrated to the United States in 2008.
                </p>
                <p>
                    Everything was an adjustment except one element of my life, my love for soccer.
                    My U.S. soccer career started at the local intramural level then I was a starting varsity striker in the blink of an eye.
                    Traveling and competing in different tournaments yielded a lot of recruiters from all over the country.
                    However, I decided to commit to Montclair State University.
                </p>
                <p>
                    Throughout my collegiate career at Montclair State, we won two NJAC titles and made multiple NCAA tournament appearances.
                    I then graduated college with a degree in Sports Management, which resulted in my training and coaching career.
                    My passion as trainer is just as great as my passion as a player, which is why I am the trainer I am today.
                    It is a great blessing to be able to share my knowledge and experience of the beautiful game and coach each player&apos;s development not only on the field but also off the field.
                </p>
            </div>
            <div className={ styles.about__signature }>
                <p>Coach Alain Brown.</p>
            </div>
            <div className={ styles.about__footer } />
        </div>
    )
}