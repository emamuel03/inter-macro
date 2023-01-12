import React from 'react'
import styles from '../styles/Components.module.css'

function Notification({ show, message }) {
    return (
      <div className={styles}>
        <div>
          <div id="snackbar" className={show ? "animation-in" : "not-show"}>
            {message}
          </div>
        </div>
      </div>
    );
  }
  
  export default Notification;
