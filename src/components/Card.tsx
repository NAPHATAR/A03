import React from 'react';
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img src="vaccine.jpg" alt="Vaccine Information" />
            <div className={styles.content}>
                <h2>Why Vaccines Matter</h2>
                <p>Vaccines save lives by preventing the spread of infectious diseases. Make sure to stay up-to-date with your vaccinations.</p>
            </div>
        </div>
    );
}

export default Card;
