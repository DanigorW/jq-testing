// javascript cheatSheet //

// querySelectors & attribute
// api connection // xml //fetch // jquery // axios
// window options 
// get url query's - let query = location.search
// event listeners
// array methods
// objects methods
// string methods
// form submit
// loops






// querySelector & attribute
// get one element
//const btn = document.querySelector("/selector like css/name of element");
// get all elements
//const btn = document.querySelectorAll("/selector like css/name of element");
// get attribute
// const img = document.querySelector("img").getAttribute("attr name");
// set attribute
// const img = document.querySelector("img").setAttribute("attr name","new value");



// window options


// window.innerWidth
/*
if(window.innerWidth < 1000) {
  //do something
  document.querySelector("img").setAttribute("src", "https://nmap.org/images/nmap-401-demoscan-squarecrop-150x150.gif" );
}
*/



//XML 
/* 
const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
btn.addEventListener("click", function(){

  const xml = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random"
  xml.onreadystatechange = function (){
    if(this.status === 200 && this.readyState === 4) {
      const data = JSON.parse(this.responseText);
      h1.textContent = data.value
    }
  }
  
  xml.open("GET",url,true);
  xml.send();
})
*/


//JQUERY 
/*
const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", function(){
  $.ajax({
    method:"GET",
    url:url,
    dataType:"JSON",
    success: getData,
  })
})

function getData(data){
  const dataJson = data.value;
  h1.textContent = dataJson
}
*/

//FETCH 
/*
const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", ()=>{
  fetch(url)
  .then(data => data.json())
  .then(data => showData(data))
  .catch(err => console.log(err))
})

const showData = (data) => {
  const {value} = data
  h1.textContent = value
}
*/

//AXIOS
/*
const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", function(){
  axios.get(url).then(showData)
  
})

function showData(data) {
  const dataJson = JSON.parse(data.request.responseText)
  h1.textContent = dataJson.value
}
*/



//smooth scrolling
/*
const btn = document.querySelector(".button-1");
btn.addEventListener("click", ()=>{
    document.querySelector('#igor').scrollIntoView({ 
        behavior: 'smooth' 
    })    
})
*/

