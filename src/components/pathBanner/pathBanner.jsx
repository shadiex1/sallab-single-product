import React from "react";
import styles from "./pathBanner.module.scss";

const pathBanner=()=>{
    return(
        <div className={styles.banner}>
            <div className={styles.path}>
                <ul>
                    
                    <span>home <span className={styles.slash}>|</span> products <span className={styles.slash}>|</span> category name <span className={styles.slash}>|</span> product name</span>
                </ul>
            </div>
        </div>
    )
}

export default pathBanner