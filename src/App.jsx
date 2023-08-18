import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

const heroes = [
  {
    name: "Iron Man",
    imgSrc: "src/assets/Iron Man.jpg",
    text: `Iron Man, alias Tony Stark, est un personnage emblématique de l'univers Marvel. Industriel de génie, Stark crée une armure technologiquement avancée, lui offrant des capacités surhumaines inégalées. Après un grave incident qui faillit lui coûter la vie, il devient Iron Man, déterminé à combattre l'injustice. Doté d'un esprit vif, d'une audace sans fin et d'un sens de l'humour piquant, il est non seulement un membre fondateur des Avengers, mais aussi l'un des protecteurs les plus aimés et respectés de la Terre.`,
  },
  {
    name: "Captain America",
    imgSrc: "src/assets/Captain America.jpg",
    text: `Captain America, de son vrai nom Steve Rogers, est un super-héros emblématique de Marvel. Frêle et déterminé, Rogers est transformé en super-soldat pendant la Seconde Guerre mondiale grâce à un sérum expérimental. Armé de son bouclier indestructible, il incarne les idéaux de justice, de courage et de liberté. Après avoir été cryogénisé, il se réveille des décennies plus tard et rejoint les Avengers. Symbole intemporel d'espoir, Captain America est le cœur battant du Marvel Cinematic Universe.`,
  },
  {
    name: "Captain Marvel",
    imgSrc: "src/assets/Captain Marvel.jpg",
    text: `Captain Marvel, aussi connue sous le nom de Carol Danvers, est une figure puissante de l'univers Marvel. Ancienne pilote de l'US Air Force, Danvers acquiert des pouvoirs cosmiques suite à une explosion liée à une technologie extraterrestre. Dotée de superforce, de la capacité de voler et de projeter de l'énergie, elle devient l'une des héroïnes les plus puissantes de la galaxie. Oscillant entre sa vie sur Terre et dans l'espace, elle est un pont entre les Avengers et l'univers cosmique, défendant l'injustice partout.`,
  },
  {
    name: "Black Widow",
    imgSrc: "src/assets/Black Widow.jpg",
    text: `Black Widow, de son vrai nom Natasha Romanoff, est une espionne redoutable de l'univers Marvel. Formée dès son plus jeune âge par le programme russe "Chambre Rouge", elle devient une experte en combat et en infiltration. Libérée de son passé sombre, Romanoff rejoint le S.H.I.E.L.D. et plus tard les Avengers. Avec une agilité impressionnante, des talents de combattante et une maîtrise des arts de l'espionnage, elle combat pour la justice. Malgré l'absence de superpouvoirs, sa détermination la place parmi les héros les plus valeureux.`,
  },
  {
    name: "Thor",
    imgSrc: "src/assets/Thor.jpg",
    text: `Thor, dieu du tonnerre et héritier d'Asgard, est une icône majeure de l'univers Marvel. Fils d'Odin et frère de Loki, sa puissance est symbolisée par Mjölnir, son marteau enchanté. Des royaumes cosmiques aux rues de la Terre, il défend les innocents contre les menaces. Sa force surhumaine, sa bravoure et son sens de l'honneur en font un allié précieux des Avengers. Tout en gérant les défis de la divinité et de la fraternité, Thor demeure un gardien infatigable de l'équilibre cosmique et terrestre.`,
  },
  {
    name: "Black Panther",
    imgSrc: "src/assets/Black Panther.jpg",
    text: `Black Panther, alias T'Challa, règne sur le royaume caché de Wakanda dans l'univers Marvel. Héritant du manteau royal, il est doté de capacités surhumaines grâce à un herbier sacré. Wakanda, riche en vibranium, le voit comme son protecteur face aux menaces externes. Agile, intelligent et stratège, T'Challa est aussi un leader né. En tant que Black Panther, il défend la justice à la fois en tant que roi et super-héros, alliant tradition wakandaise et modernité dans sa quête de paix globale.`,
  },
  {
    name: "Mantis",
    imgSrc: "src/assets/Mantis.jpg",
    text: `Mantis est une énigmatique figure de l'univers Marvel. D'origine céleste, elle possède le don unique d'émouvoir et de ressentir les sentiments d'autrui par simple toucher. Avec une innocence déconcertante, elle apporte une perspective différente au sein des Gardiens de la Galaxie. Sa capacité à apaiser la douleur émotionnelle et physique est essentielle dans de nombreuses situations. Bien qu'extérieurement douce et réservée, Mantis démontre une force intérieure et une loyauté indéfectible à ses alliés interstellaires.`,
  },
  {
    name: "Groot",
    imgSrc: "src/assets/Groot.jpg",
    text: `Groot, souvent reconnu par son mantra "Je s'appelle Groot", est un être arborescent de l'univers Marvel. Membre essentiel des Gardiens de la Galaxie, il possède la capacité de croissance rapide, de régénération et de manipulation de sa forme. Bien qu'il communique principalement par sa phrase signature, sa loyauté et son dévouement envers ses amis, en particulier Rocket, sont inégalés. Malgré son apparence robuste, Groot détient une sensibilité touchante, offrant sa force et son cœur au service de l'équipe.`,
  },
  {
    name: "Nebula",
    imgSrc: "src/assets/Nebula.jpg",
    text: `Nebula, fille adoptive de Thanos dans l'univers Marvel, est une combattante redoutable. Modifiée cybernétiquement, elle porte les cicatrices d'une enfance tumultueuse marquée par la rivalité avec sa sœur Gamora. Initialement motivée par la vengeance, elle évolue pour trouver sa propre voie. Bien qu'au début adversaire des Gardiens de la Galaxie, elle devient, avec le temps, une alliée précieuse. Complexée, dotée d'une force incroyable et d'une détermination inébranlable, Nebula recherche sa place dans le cosmos.`,
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const randomIndex = Math.floor(Math.random() * heroes.length);
  const [currentHero, setCurrentHero] = useState(heroes[randomIndex]);

  return (
    <Container>
      <Card hero={currentHero} />
      <NavBar heroes={heroes} setCurrentHero={setCurrentHero} />
    </Container>
  );
}

export default App;
