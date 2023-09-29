/*dette er tic tac toe*/ 
/*tre boxer i en grid. click en box og den boxen skal få en x i seg/// DONE! */
/*la neste gang du trykker skifte til O utenom der du trykket først/// DONE! */
/*check if board filled */
/*check winner? */

const box = document.querySelector("#tac")
let count = 0
let arr = []
const firstwin = [1, 2, 3] 
const seconwin= [1, 5, 9]
let wincon = {
    obj1:"012",
    obj2:"345",
    obj3:"678",
    obj4:"036",
    obj5:"147",
    obj6:"258",
    obj7:"048",
    obj8:"246"
};
    

box.addEventListener("click", (event)=>{
    const evTxt =  event.target.textContent
    console.log(event.target)

    if (count % 2) {
        event.target.textContent = "O"
       
    } else {
        event.target.textContent = "X"
       
    } 
    count++
    checkwinner()
    
})
const boxes = box.querySelectorAll("div")
    const length = box.childElementCount
function checkwinner(){
    
arr = []
    for (i = 0; i <= length; i++) {
        arr.push(boxes[i].textContent);
        
        
        if(boxes[i].textContent === "X") {
            
console.log(arr.indexOf("X"))
        } else if(boxes[i].textContent === "O") {

        }else {
            console.log("continue")
        }
    }
    
}






