import React from "react";
import styles from "./itemsDisplay.module.scss";
import testImg from "../../assets/Mask Group 94.png"
import brandImg from "../../assets/Image 121.png";
import {CartIcon,HeartIcon,ShareIcon,NextArrow,PrevArrow} from "../../svg/svg";
import Carousel from 'nuka-carousel';

const itemsDisplay = ()=>{
    return(
        <div className={styles.itemsDisplay}>
            <h3>items</h3>
            <div className={styles.board}>
                <div className={styles.itemsList}>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices</span>
                    </div>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices Ceramic ..  floor Wooden Parquet  .. slices</span>
                    </div>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices</span>
                    </div>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices</span>
                    </div>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices Ceramic floor Wooden .. Parquet slices</span>
                    </div>
                    <div className={styles.item}>
                        <img src={testImg} alt="test"/>
                        <span>Ceramic floor Wooden Parquet slices</span>
                    </div>
                  
                </div>
                <div className={styles.gallery}>
                    <div className={styles.mainImg}>
                                            <img src={testImg}/>

                    </div>
                    <div className={styles.slider}>
                    <Carousel
             autoplay
             wrapAround
             cellSpacing={20}	
            defaultControlsConfig={{
                prevButtonClassName: `${styles.prev}`,
        nextButtonClassName: `${styles.next}`,
                pagingDotsStyle: {
                  display: 'none'
                }
              }}
              
            slidesToShow="3"
  renderCenterLeftControls={({ previousSlide }) => (
    <button className={styles.prev} onClick={previousSlide}>
      <PrevArrow/>
    </button>
  )}
  renderCenterRightControls={({ nextSlide }) => (
    <button className={styles.next} onClick={nextSlide}>
<NextArrow/>    </button>
  )}
>
    
<img src={testImg}/>
<img src={testImg}/>
<img src={testImg}/>

</Carousel>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h3 className={styles.title}>Ceramic floor Wooden Parquet slices Ceramic floor Wooden </h3>
                    <div className={styles.availble}>
                        <p><span>code : </span> GT-360</p>
                        <span>In Stock</span>
                    </div>
                    <div className={styles.priceContainer}>
                        <div>
                         <span className={styles.price}>120 egp</span> <span>Per Box</span>
                        </div>           
                        <img src={brandImg} alt="brand"/>
                    </div>

                    <div className={styles.detailsContainer}>
                        <div className={styles.details}>
                        <span className={styles.property}>Box size</span> <span className={styles.value}>1.20 M2</span>
                        </div>
                        <div className={styles.details}>
                        <span className={styles.property}>Color</span> <span className={styles.value}>Wood look</span>
                        </div>
                        <div className={styles.details}>
                        <span className={styles.property}>Size</span> <span className={styles.value}>50 × 50</span>
                        </div>
                        <div className={styles.details}>
                        <span className={styles.property}>Choice</span> <span className={styles.value}>First</span>
                        </div>
                    </div>
                    <div className={styles.quantity}>
                        <span className={styles.quantityspan}>Quantity</span>
                        <input type="number" placeholder="please enter quantity"/>
                        <span>box</span>
                    </div>
                    
                        <button className={styles.cartBtn}>
                            <CartIcon/> Add to cart
                        </button>
                        <div className={styles.social}>
                        <HeartIcon/> <span>|</span> <ShareIcon/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default itemsDisplay