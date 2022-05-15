import React from 'react'; 
import styles from './Button.module.css';

function Button({ onClick }) {
    return (
        <button type='button' onClick={onClick} className ={styles.button}>Load more</button>
    );
    
}

export default Button;