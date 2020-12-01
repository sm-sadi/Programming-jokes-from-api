// api from dog server 
const apiLink = "https://official-joke-api.appspot.com/jokes/programming/random";
// dom elements 
const photoDiv= document.getElementById("newphoto");
const newbtn= document.getElementById("newbtn");


 async function getRandomDog(){
   const response=  await fetch(apiLink);
   const json =  await response.json();
   
    const mymap =json.map(function(itm){
      return  [
        setup =itm.setup,
        line = itm.punchline,  
    ]
   });
   
   mymap.forEach(function(e){
     e.join("");
    photoDiv.innerHTML=`<p>${e}</p>`
   })

}

function loading(){
    photoDiv.innerHTML=`<div class=" text-center">
    <div class="spinner-border text-danger " role="status">
        <span class="sr-only"></span>
      </div>
</div>` ;
}


newbtn.addEventListener("click", function(){
   getRandomDog()
   loading();
})



