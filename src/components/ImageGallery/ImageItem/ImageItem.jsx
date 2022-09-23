// import PropTypes from 'prop-types';
import css from './ImageItem.module.css';
import PropTypes from 'prop-types';

export const ImageItem = ({smallURL, largeURL, tags }) => {
    return(
        <li className={css.ImageGalleryItem}>
            <img src={smallURL} alt={tags} />
        </li>
    );
};

ImageItem.propTypes = {
    smallURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeURL: PropTypes.string.isRequired,
  };