import React from "react";
import styles from "./footer.module.scss";
import {LocationIcon,TwitterIcon,FacebookIcon,InstagramIcon,YoutubeIcon} from "../../svg/svg";
import nasNavLogo from "../../assets/Rectangle 135.png"
const footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <h3>company</h3>
                        <ul>
                            <li>about us</li>
                            <li>showrooms</li>
                            <li>careers</li>
                            <li>terms & conditions</li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3>main branches</h3>
                        <ul>
                            <li><LocationIcon/> 168 Jozef Tito El Nozha El Gedida. Behind Cairo Airport.</li>
                            <li><LocationIcon/> Mall 90th Street In Front Of The American University .Cairo Governorate</li>
                            <li><LocationIcon/> 146 Al Bahr Al Aazam.Giza </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contactSection}>
                    <h3>hotline</h3>
                    <span>19601</span>
                    <ul>
                        <li><FacebookIcon/></li>
                        <li><YoutubeIcon/></li>
                        <li><TwitterIcon/></li>
                        <li><InstagramIcon/></li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyrights}>
                <span>azizsallab.com</span>
                <div className={styles.nasnav}>
                    <span>Powered by</span>
                    <img src={nasNavLogo} alt="nasnav logo"/>
                </div>
            </div>
        </div>
    )
}

export default footer



