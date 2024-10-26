import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/styles/ui/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <header className={styles.logoContainer}>
                <Image src="/images/meg-logo.png" alt="MEG Consulting" width={40} height={40} />
                <h2 className={styles.title}>MEG Consulting</h2>
            </header>
            <div className={styles.linksContainer}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/team" className={styles.link}>Our Team</Link>
                <Link href="/clients" className={styles.link}>Clients</Link>
                <Link href="/recruitment" className={styles.link}>Recruitment</Link>
            </div>
        </nav>
    );
};

export default Navbar;
