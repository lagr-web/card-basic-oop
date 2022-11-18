
class Containers {

  constructor(htmlWireframe) {

    this.child;
    let getKey;

    htmlWireframe.html.forEach((element, index) => {
      getKey = Object.keys(element.parent);

      const parent = document.createElement(element.parent.type);

      getKey[1] === "id"
        ? (parent.id = element.parent.id)
        : (parent.className = element.parent.class);

      document.body.appendChild(parent);

      if (htmlWireframe.html[index].hasOwnProperty("child")) {
        element.child.forEach((inner, index) => {
          this.child = document.createElement(inner.type);

          getKey[1] === "id"
            ? (this.child.id = inner.id)
            : (this.child.id = inner.class);

          parent.appendChild(this.child);
        }); //END foreach for child

        if (htmlWireframe.html[index].hasOwnProperty("innerChild")) {
          this.create(element.innerChild, this.child);
        }
      }
    }); //END forEach html
  
  } // END constructor

  create(child, parent) {
    child.forEach((inner, index) => {
      let getKeyInner = Object.keys(inner);

      const div = document.createElement(inner.type);

      getKeyInner[1] == "id"
        ? (div.id = inner.id)
        : (div.className = inner.class);

      parent.appendChild(div);
    });
  }

 
}

export default Containers;
