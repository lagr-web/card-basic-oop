import { gsap } from "gsap";
import ChangeContents from "./ChangeContent";
import Menu from './Menu';
import CardData from "./CardData";
import CreateElement from "./CreateElement";

class ShowActors {

  constructor(data) {

    const CC = new ChangeContents();
    

    //**START menu */

    const menu = new Menu(CC, data);
/*
    const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer";
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement("ul");
    menuItemContainer.id = "menuItemContainer";
    menuContainer.appendChild(menuItemContainer);


    data.forEach((element, index) => {

      const menuItem = document.createElement("li");
      menuItem.setAttribute("data-index", `${index}`);
      menuItem.className = "menuItem";
      menuItem.textContent = element.name;
      menuItemContainer.appendChild(menuItem);
      menuItem.addEventListener("click", (e) => CC.getData(e, element));
     
    }); 
  */

    //**END menu */

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

  
    const childCardArray = ["headline", "imagecon", "content", "info"];

    childCardArray.forEach((elementId, index) => {
      const cardChild = document.createElement("div");
      cardChild.id = elementId;
      card.appendChild(cardChild);
    });

    /*

    const elements = [

           {
            tag:"img",
            id:"showImg",
            src:"./assets/images/ninja.png",
            addto:"imagecon"
           }
    ]

    const ce= new CreateElement(elements);
    
*/

    const showImg = document.createElement("img");//default card image
    showImg.id = "showImg";
    showImg.src = "../assets/images/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);


    const infochild = document.createElement("div");
    infochild.id = "infochild";
    document.querySelector("#info").appendChild(infochild);

    const strength = document.createElement("div");
    strength.id = "strength";
    document.querySelector("#infochild").appendChild(strength);

    const lives = document.createElement("div");
    lives.id = "lives";
    document.querySelector("#infochild").appendChild(lives);

    card.addEventListener("click", () => new CardData(CC, data));

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);

  } //end constructor
 
} //END class

export default ShowActors;
