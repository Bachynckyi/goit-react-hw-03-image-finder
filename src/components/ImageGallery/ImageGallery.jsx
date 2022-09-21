// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageItem } from './ImageItem/ImageItem';

export const ImageGallery = ({ dataImages }) => {
    return(
        <ul className={css.ImageGallery}>
            {dataImages.map( dataImage => {
                return (
                <ImageItem
                key={dataImage.id}
                smallURL={dataImage.webformatURL}
                largeURL={dataImage.largeImageURL}
                alt={dataImage.tags}
                />
                )
            })}
        </ul>
    );
};