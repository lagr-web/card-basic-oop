import ShowActors from "./ShowActors";
import "../css/style.scss";
import data from "../assets/json/data.json";


(() => {

  const dataObj = [
    {
      name: "Death Smokie",
      img: "death-smokie.png",
      information: { strength: 100, lives: 10 },
      text: "Ninja Killer dont touch him",
    },
    {
      name: "Black Scum",
      img: "black-alien-scum.png",
      information: { strength: 90, lives: 5 },
      text: "Black Scum is a Ninja Killer",
    },
    {
      name: "Ping Pang",
      img: "angry-ping.png",
      information: { strength: 80, lives: 4 },
      text: "Just som penguin Shit",
    }
  ];

   new ShowActors(data.content);

})();
