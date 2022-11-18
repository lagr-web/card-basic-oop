class AnotherGetData{

    constructor(){
        console.log('another');
    }

   async init () { 

        //console.log(baseAPIurl + "api.php?data=all&tb=" + table);
        
          const res = await fetch(
        
           `../assets/json/data.json`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json; charset=UTF-8",
              }
            }
          );
          const allData = await res.json();
        
            return allData;
        
        
        };

}

export default AnotherGetData;