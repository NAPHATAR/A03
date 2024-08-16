import React from 'react';
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img src="https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_social_media/public/cgov_image/media_image/2023-04/syringe%20and%20bottle%20mrna%20vaccine.jpg" alt="Vaccine Information" />
            <div className={styles.content}>
                <h2>Why Vaccines Matter</h2>
                <p>Vaccines save lives by preventing the spread of infectious diseases. Make sure to stay up-to-date with your vaccinations.</p>
            </div>
        </div>
    );
}

export default Card;
