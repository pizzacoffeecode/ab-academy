import React from 'react'
import Cards from '../components/UI/Cards/Cards'
import styles from '../styles/Plans.module.css'

const Plans = () => {
    return (
        <>
            <div className={ styles.plans__container }>
                <div className={ styles.plans__head }></div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "4 Week Package",
                            price: 250,
                            players: 1,
                            discount: 0,
                            session: "Meet Once a Week",
                            practice: "1 Hours Session"
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "4 Week Package",
                            price: 450,
                            players: 2,
                            discount: 100
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "4 Week Package",
                            price: 570,
                            players: 3,
                            discount: 100
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "6 Week Package",
                            price: 375,
                            players: 1,
                            discount: 5
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "6 Week Package",
                            price: 600,
                            players: 2,
                            discount: 60
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "6 Week Package",
                            price: 650,
                            players: 3,
                            discount: 100
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 500,
                            players: 1,
                            discount: 5
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 800,
                            players: 2,
                            discount: 80
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 960,
                            players: 3,
                            discount: 100
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 960,
                            players: 1,
                            discount: 100,
                            session: "Meet Once per Week",
                            practice: "75 min sessions"
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 960,
                            players: 2,
                            discount: 100,
                            session: "Meet Once per Week",
                            practice: "75 min sessions"
                        }
                    }
                    />
                </div>
                <div className={ styles.plans__card }>
                    <Cards details={
                        {
                            plan: "8 Week Package",
                            price: 960,
                            players: 3,
                            discount: 100,
                            session: "Meet Once per Week",
                            practice: "75 min sessions"
                        }
                    }
                    />
                </div>
            </div >
            <div className={ styles.plans__footer } />
        </>
    )
}

export default Plans