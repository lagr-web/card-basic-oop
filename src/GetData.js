
class GetData {

    constructor(url){
        
        this.url = url;
        this.response = null; 
    }

    async init(){

        this.response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
              }
          })
          const data = await this.response.json();
          
          return data;
         

    }

};

export default GetData;
