import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ligntskyblue;
  border-radius: 15px;
  width: 400rem;
  box-shadow: 0px 0px 25px black;
  background-color: lightskyblue;
`;

const Picture = styled.img`
  border: 2px solid white;
  border-radius: 15px;
  box-shadow: 0px 0px 25px black;
`;
const Title = styled.figcaption`
  font-size: 4rem;
  color: white;
  text-align: center;
  padding-bottom: 1rem;
  text-shadow: 1px 1px 5px black;
`;
const Text = styled.p`
  font-size: 2rem;
  color: black;
  text-align: center;
  padding-bottom: 1rem;
  text-shadow: 1px 1px 15px white;
`;

const Card = (props) => {
  const hero = props.hero;

  return (
    <Container>
      <figure className='card'>
        <Title>{hero.name}</Title>
        <Picture src={hero.imgSrc} alt={hero.name} className='card-img' />
      </figure>
      <Text>{hero.text}</Text>
    </Container>
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
