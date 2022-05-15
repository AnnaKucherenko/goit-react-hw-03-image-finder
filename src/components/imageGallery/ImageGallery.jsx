import React, { Component } from 'react'; 
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default class ImagesGallery extends Component{
    state ={
        images:[],
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.imagesSearch!==this.props.imagesSearch){
            console.log('змінився запит');
            this.setState({status:'pending'});
            fetch(`https://pixabay.com/api/?q=${this.props.imagesSearch}&page=1&key=25716572-e092d498007de7d313bf56634&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }
                return Promise.reject(new Error(`Немає зображень по запиту ${this.props.imagesSearch}`))
            })
            .then(images =>{
                console.log(images);
                const imagesArr = images.hits;
                console.log(imagesArr );
                this.setState({images:imagesArr, status:'resolved'})})
            .catch(error=>this.setState({error, status:'rejected'}));
            
        }
    }

    render(){
        const {images, error, status}= this.state;
        // if(status==='idle'){
        //     return <div>Введіть запит</div>
        // }
        if(status==='pending'){
            return <div>Завантажуєм...</div>
        }
        if(status==='rejected'){
            return <h1>{error.message}</h1>
        }
        if(status==='resolved'){
            return (<ul className={styles.imageGallery}>
                {images.map(image=>(
                    <ImageGalleryItem image={image} key={image.id}/>
                 ))}
                </ul>)
        }

        
    }
}