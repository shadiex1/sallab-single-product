import React from "react";
import styles from "./collectionOverview.module.scss";
import brandImg from "../../assets/Image 121.png";
import collectionImg from "../../assets/Mask Group 76.png";
import {HeartIcon,ShareIcon,ToursIcon,NextArrow,PrevArrow} from "../../svg/svg";
import { Component } from "react";
import Carousel from 'nuka-carousel';

    class CollectionOverview extends Component{
        render(){
         
            return(<div className={styles.collectionOverview}>
            <div className={styles.board}>
                <div className={styles.collectionInfo}>
                    <div>
                    <div className={styles.header}>
                        <div className={styles.title}><h3>collecion name</h3> <p>10 items</p></div>
                        <div className={styles.brand}><img src={brandImg} alt="brand logo"/> <span className={styles.brandName}>cleopatra</span></div>
                    </div>
                    <div className={styles.description}>
                        <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour, 
                            or randomised words which don't look even slightly believable. 
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as  sentence structures,
                            to generate Lorem Ipsum which looks reasonable.
                            The generated Lorem Ipsum is therefore always free from repetition,
                            injected humour, or non-characteristic words etc.
                        </p>
                    </div>
                    </div>
                    <div className={styles.social}>
                        <HeartIcon/> <span>|</span> <ShareIcon/>
                    </div>
                </div>
                <div className={styles.imgSlider}>
           
                    <div>
                        <div> <img src={collectionImg} alt="collection"/></div>
                    
                   
                   
                    </div>
                    <div className={styles.toursBtn}>
                    <button >
                        <span>take a real tour</span> <ToursIcon/>
                    </button>
                    </div>
                </div>
            </div>
        </div>
            );
        }
    }
    


    export default CollectionOverview