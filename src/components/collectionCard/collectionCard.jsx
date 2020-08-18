import React from "react";
import styles from "./collectionCard.module.scss";

const collectionCard = (props)=>{
    return(
        <div className={styles.card}>
            <img src={props.img} alt="collection"/>
            <div className={styles.info}>
                <span>{props.title}</span>
                <img src={props.brand} alt="brand logo"/>
            </div>
        </div>
    )
}

export default collectionCard