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

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}