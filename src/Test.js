
class TestClass {
  
  constructor() {

    const Car = {
      
      engine:1.2,
      color:"red"
      
    }

    this.myFunction(Car.engine, Car.color);

  } //END constructor

  myFunction(egineSize, mColor) {
    console.log(egineSize, mColor);
  }

}//END class

export default TestClass;
