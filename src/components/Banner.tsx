import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img src="hospital.jpg" alt="Vaccine Service Center" className={styles.bannerImage} />
            <div className={styles.overlay}>
                <h1>Vaccine Service Center</h1>
                <p>Get vaccinated and protect yourself and your community.</p>
            </div>
        </div>
    );
}

export default Banner;
