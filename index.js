// Your code here
class Polygon{
 constructor(array){
   this.array = array
 } 
 
 get countSides() {
   return this.array.length
 }
 get perimeter() {
   
   return this.array.reduce((total, element) => total + element)
 }
}

class Triangle extends Polygon{
  get isValid(){
    const points = this.points;
    const firstSideValid = points[0] + points[1] > points[2]
    const secondSideValid = points[0] + points[2] > points[1]
    const thirdSideValid = points[1] + points[2] > points[0]

    return firstSideValid && secondSideValid && thirdSideValid;
  }
}