import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
import styles from '../styles/header/Header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.headerContainer} >
        <div>
          <Image src={logo} alt="logo"></Image>
        </div>
        <nav className={styles.navMenu}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
