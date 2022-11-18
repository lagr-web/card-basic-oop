class Element{

   constructor(){
    }

    ref(element, add) {
   
        let mAdd = add || undefined;
    
        let el = document.querySelector(element);
    
        if (mAdd !== undefined) {
          let added = document.querySelector(add);
          el.appendChild(added);
        }
    
        return el;
      }



}

export default Element;