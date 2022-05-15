import React from 'react'; 
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({image:{id, webformatURL, tags, largeImageURL}}){
    return(
        <li key ={id} className={styles.imageGalleryItem}>
            <img src={webformatURL} alt={tags} className={styles.imageGalleryItem_image} />
        </li>
    )
}