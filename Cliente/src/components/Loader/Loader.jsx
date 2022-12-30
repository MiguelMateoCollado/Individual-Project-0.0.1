import React from 'react'
import styles from "./Loader.module.css"
function Loader() {
  return (
    <div class={styles.lds_facebook}><div></div><div></div><div></div></div>
  )
}

export default Loader