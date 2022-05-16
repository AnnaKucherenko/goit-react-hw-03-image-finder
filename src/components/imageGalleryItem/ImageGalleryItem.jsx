import React, {Component} from 'react'; 
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({onClick, image:{id, webformatURL, tags, largeImageURL}}){
    return(
        <li key ={id} className={styles.imageGalleryItem}>
            
            <img onClick={()=>onClick(largeImageURL)} src={webformatURL} alt={tags} className={styles.imageGalleryItem_image} />
        </li>
    )
}