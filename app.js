let div = document.querySelector("#div");

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {


    console.log(res);
    let index=0
    function updatedDisplay(){
        if (index<res.length){
    div.innerHTML =
    `<fieldset >
    <legend> <h1 class="text-4xl">Employee Details</h1> </legend>
    <b>Name: </b> ${res[index].name} <br> <b>User Name:</b> ${res[index].username} <br> <b>Phone:</b> ${res[index].phone} 
    <br> <b>Email:</b> ${res[index].email} <br>
    </fieldset>
    <button onclick="decreaseIndex()">Previous</button>
    <button onclick="increaseIndex()">Next</button>
    `;}
    else{
        div.innerHTML = `<h1>No more employees.</h1><br>        
        <button onclick="decreaseIndex()">Previous</button>`;
    }
    window.increaseIndex= function (){

        index++ 
         console.log(index)
         updatedDisplay()
    }
    window.decreaseIndex= function (){
         if (index>=1) {
            index--
         }
         
         console.log(index)
         updatedDisplay()
    }
    

}
updatedDisplay();
})


.catch((err)=>{
    console.log(err);
    
})