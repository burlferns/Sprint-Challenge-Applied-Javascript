// ******* The following was not mentioned in the instructions, but is in the gif
let div = document.createElement('div');
div.classList.add('tab_all');
div.textContent="ALL";
div.style.background="white";
div.style.color="black";
div.style.border="1px solid black";
div.style.paddingLeft="10px";
div.style.paddingRight="10px";
div.style.fontSize="12px";
div.style.letterSpacing="2px";
div.style.fontWeight="bold";
div.style.textTransform="uppercase";

const addPointTab = document.querySelector(".topics");
addPointTab.appendChild(div);









// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response);
    const topicsArray = response.data.topics;
    const addPoint = document.querySelector(".topics");
    topicsArray.forEach(elem => {
        let div = document.createElement('div');
        div.classList.add('tab');
        div.textContent=elem;
        addPoint.appendChild(div);       
    });  
  })
  .catch(error => {
    console.log("The topics data was not returned",error);
});






