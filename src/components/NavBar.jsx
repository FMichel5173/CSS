import PropTypes from "prop-types";
import styled from "styled-components";

const NavButton = styled.button`
  width: 25rem;
  padding: 1rem;
  background-color: lightskyblue;
  color: black;
  border: 1px solid lightskyblue;
  box-shadow: 0px 0px 25px gray;
  border-radius: 15px;
  font-size: 2rem;
  text-shadow: 1px 1px 15px white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4rem;
`;

const NavBar = ({ heroes, setCurrentHero }) => {
  const sortedHeroes = [...heroes].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Container>
      {sortedHeroes.map((hero) => (
        <NavButton key={hero.name} onClick={() => setCurrentHero(hero)}>
          {hero.name}
        </NavButton>
      ))}
    </Container>
  );
};

NavBar.propTypes = {
  setCurrentHero: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
