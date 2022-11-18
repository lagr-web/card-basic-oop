import { gsap } from "gsap";
import Element from "./Element";
import ChangeContents from "./ChangeContent";

class ShowActors {

  constructor(data) {

    console.log(data);

  const CC = new ChangeContents();

  //console.log(CC.getData());

    let el = new Element();

    //**START menu */

    const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer";
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement("ul");
    menuItemContainer.id = "menuItemContainer";
    menuContainer.appendChild(menuItemContainer);

  

    data.content.forEach((element, index) => {
      const menuItem = document.createElement("li");
      menuItem.setAttribute("data-index", `${index}`);
      menuItem.className = "menuItem";
      menuItem.textContent = element.name;
      menuItemContainer.appendChild(menuItem);
      menuItem.addEventListener("click", (e) => this.changeContent(e, element));
    });
  
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

    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = "../assets/images/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    //el.ref("#imagecon", "#showImg");

    /*  const showImg = el.ref("#showImg");
    showImg.src = "../assets/images/ninja.png";
    el.ref("#imagecon", "#showImg"); */

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);

    card.addEventListener("click", (e) => {
      if (this.currentDataIndex > -1) {
        el.ref("#info").style.display = "block";

        gsap.to("#info", {
          duration: 0.05,
          rotate: 10,
          scale: 1.3,
          repeat: 3,
          transformOrigin: "center",
          yoyo: true,
        });

        let addInfo = data.content[this.currentDataIndex].information;

        let mStrength = document.querySelector("#strength");
        mStrength.textContent = `${addInfo.strength}`;

        let mLives = document.querySelector("#lives");
        mLives.textContent = `${addInfo.lives}`;
      }
    });
    
  } // end constructor

  changeContent(e, data) {

    let infoTextDisplayNone = document.querySelector("#info");
    infoTextDisplayNone.style.display = "none";

    this.currentDataIndex = e.currentTarget.dataset.index; //now global in class

    let mHeadline = document.querySelector("#headline");
    mHeadline.textContent = data.name;

    const imageSrc = data.img;
    const img = "../assets/images/" + imageSrc;

    let mImg = document.querySelector("#showImg");
    mImg.src = img;

    let mContent = document.querySelector("#content");
    mContent.textContent = data.text;

    let elem = document.querySelector("#cardContainer");

    gsap.to(elem, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
    });
  }
} // END class

export default ShowActors;
