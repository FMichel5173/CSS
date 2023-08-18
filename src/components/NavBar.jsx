import PropTypes from "prop-types";

const NavBar = ({ heroes, setHeroIndex }) => {
  return (
    <div>
      {heroes.map((hero, index) => (
        <button key={hero.name} onClick={() => setHeroIndex(index)}>
          {hero.name}
        </button>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  setHeroIndex: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
