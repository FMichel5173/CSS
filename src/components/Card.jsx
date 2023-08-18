import PropTypes from "prop-types";

const Card = (props) => {
  const hero = props.hero;

  return (
    <>
      <figure className='card'>
        <img src={hero.imgSrc} alt={hero.name} className='card-img' />
        <figcaption>{hero.name}</figcaption>
      </figure>
      <p>{hero.text}</p>
    </>
  );
};

Card.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Card;
