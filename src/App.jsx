import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const heroes = [
  {
    name: "Iron Man",
    imgSrc: "src/assets/Iron Man.jpg",
    text: `Iron Man, alias Tony Stark, est un personnage emblématique de l'univers Marvel. Industriel de génie, Stark crée une armure technologiquement avancée lui donnant des capacités surhumaines. Après un incident qui faillit lui coûter la vie, il devient Iron Man pour combattre l'injustice. Avec un esprit vif, une audace sans fin et un sens de l'humour sarcastique, il est non seulement un membre fondateur des Avengers, mais aussi l'un des protecteurs les plus aimés de la Terre.`,
  },
  {
    name: "Captain America",
    imgSrc: "src/assets/Captain America.png",
    text: `Captain America, de son vrai nom Steve Rogers, est un super-héros emblématique de Marvel. Frêle et déterminé, Rogers est transformé en super-soldat pendant la Seconde Guerre mondiale grâce à un sérum expérimental. Armé de son bouclier indestructible, il incarne les idéaux de justice, de courage et de liberté. Après avoir été cryogénisé, il se réveille des décennies plus tard et rejoint les Avengers. Symbole intemporel d'espoir, Captain America est le cœur battant du Marvel Cinematic Universe.`,
  },
  {
    name: "Captain Marvel",
    imgSrc: "src/assets/Captain Marvel.png",
    text: `Captain Marvel, aussi connue sous le nom de Carol Danvers, est une figure puissante de l'univers Marvel. Ancienne pilote de l'US Air Force, Danvers acquiert des pouvoirs cosmiques suite à une explosion liée à une technologie extraterrestre. Dotée de superforce, de la capacité de voler et de projeter de l'énergie, elle devient l'une des héroïnes les plus puissantes de la galaxie. Oscillant entre sa vie sur Terre et dans l'espace, elle est un pont entre les Avengers et l'univers cosmique, défendant l'injustice partout.`,
  },
  {
    name: "Black Widow",
    imgSrc: "src/assets/Black Widow.jpg",
    text: `Black Widow, de son vrai nom Natasha Romanoff, est une espionne redoutable de l'univers Marvel. Formée dès son plus jeune âge par le programme russe "Chambre Rouge", elle devient une experte en combat et en infiltration. Libérée de son passé sombre, Romanoff rejoint le S.H.I.E.L.D. et plus tard les Avengers. Avec une agilité impressionnante, des talents de combattante et une maîtrise des arts de l'espionnage, elle combat pour la justice. Malgré l'absence de superpouvoirs, sa détermination la place parmi les héros les plus valeureux.`,
  },
];

function App() {
  const [heroIndex, setHeroIndex] = useState(0);

  return (
    <>
      <Card hero={heroes[heroIndex]} />
      <NavBar
        heroes={heroes}
        heroIndex={heroIndex}
        setHeroIndex={setHeroIndex}
      />
    </>
  );
}

export default App;
