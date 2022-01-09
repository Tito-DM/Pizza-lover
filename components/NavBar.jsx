import Image from "next/image";
import React from "react";
import styles from "../styles/NavBar.module.css";
import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <AiOutlinePhone size={32}  color="#c2185b"/>
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}> 012 345 678</div>
          </div>
        </div>

        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <h1>Pizza´s Lover</h1>
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>contact</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <AiOutlineShoppingCart size={32} />
            <div className={styles.counter}>2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
