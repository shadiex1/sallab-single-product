import React from "react";
import styles from "./similarCollections.module.scss";
import CollectionCard from "../collectionCard/collectionCard"
import Carousel from 'nuka-carousel';
import {NextArrow,PrevArrow} from "../../svg/svg";
import testProduct1 from "../../assets/Mask Group 107.png";
import testProduct2 from "../../assets/Mask Group 108.png";
import testProduct3 from "../../assets/Mask Group 110.png";

import testBrand1 from "../../assets/roca.png"
import testBrand2 from "../../assets/realonda.png"
import testBrand3 from "../../assets/Image 121.png"
const similarCollections = ()=>{
    return(
        <div className={styles.collections}>
            <div className={styles.container}>
            <h3>similar collections</h3>
             <Carousel
             autoplay
             wrapAround
             cellSpacing={50}	
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
    
<CollectionCard img={testProduct1} brand={testBrand1} title="Grand"/>
<CollectionCard img={testProduct2} brand={testBrand2} title="Dream 3"/>
<CollectionCard img={testProduct3} brand={testBrand1} title="Megan"/>
<CollectionCard img={testProduct1} brand={testBrand2} title="Grand"/>

</Carousel>
            </div>
           
        </div>
    )
}

export default similarCollections