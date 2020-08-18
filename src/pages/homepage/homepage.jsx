import React, { Component } from "react";
import styles from "./homepage.module.scss";
import Menu from "../../components/menu/menu";
import PathBanner from "../../components/pathBanner/pathBanner";
import CollectionOverview from "../../components/collectionOverview/collectionOverview";
import Footer from "../../components/footer/footer";
import SimilarCollections from "../../components/similarCollections/similarCollections";
import ItemsDisplay from "../../components/itemsDisplay/itemsDisplay"
class Homepage extends Component{
    render(){
        return(
            <div className={styles.homepage}>
               <Menu/>
               <PathBanner/>
               <CollectionOverview/>
               <ItemsDisplay/>
               <SimilarCollections/>
               <Footer/>
            </div>
        )
    }
}

export default Homepage


