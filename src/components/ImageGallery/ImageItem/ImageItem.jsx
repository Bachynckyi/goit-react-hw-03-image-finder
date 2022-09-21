// import PropTypes from 'prop-types';
import css from './ImageItem.module.css';

export const ImageItem = ({smallURL, largeURL, tags }) => {
    return(
        <li className={css.ImageGalleryItem}>
            <img src={smallURL} alt={tags} />
        </li>
    );
};