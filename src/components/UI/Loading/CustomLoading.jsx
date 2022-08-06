import React from 'react'
import styles from './Loading.module.css'

const CustomLoading = () => {
  return (
    <div className={ styles.custom_layout }>
      <div className={ styles.lds_facebook }><div></div><div></div><div></div></div>
    </div>
  )
}

export default CustomLoading