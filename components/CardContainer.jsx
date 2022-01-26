import React from "react";
import Card from "./Card";
import styles from "../styles/CardContainer.module.css";

const CardContainer = () => {
  return (
    <div>
      <div className={styles.DisplayCard}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
