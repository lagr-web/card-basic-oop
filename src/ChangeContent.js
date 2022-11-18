import { gsap } from "gsap";

class ChangeContents{

    constructor(){
    
      this.currentDataIndex=-1;

    }

    getData (e, data) {

      document.querySelector("#info").style.display = "none";

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
          
          get currentIndex(){

            return this.currentDataIndex;

          }
}

export default ChangeContents;