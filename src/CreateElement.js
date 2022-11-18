class CreateElement{

    constructor(ar){

        console.log(ar);

        ar.forEach(element => {

            console.log(element);
            const el = document.createElement(element.tag);
            el.id = element.id;

            if(element.tag == "img") el.src = element.src;

            document.querySelector("#" + element.addto).appendChild(el);

        });

    }

    createImgElement(){
    
        const el = document.createElement(element.tag);
        el.id = element.id;
        element.src;

        document.querySelector("#" + element.addto).appendChild(el);

    }


}

export default CreateElement;