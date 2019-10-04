// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const addPointCards = document.querySelector(".cards-container");



// ************** Get articles and display them
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response);

    topicsObj = response.data.articles;
    // console.log("************* topicsObj");
    // console.log(topicsObj);

    topicsAry = Object.keys(topicsObj);
    // console.log("************* topicsAry");
    // console.log(topicsAry);

    topicsAry.forEach( topic => {
        singleTopicAry = topicsObj[topic];
        // console.log("************* singleTopicAry");
        // console.log(singleTopicAry);

        singleTopicAry.forEach( singleTopic => {
            // console.log("************* singleTopicData");
            // console.log(`Headline: ${singleTopic.headline}`);
            // console.log(`Photo: ${singleTopic.authorPhoto}`);
            // console.log(`Name: ${singleTopic.authorName}`);
            addPointCards.appendChild(createCard(singleTopic.headline,
                    singleTopic.authorPhoto,singleTopic.authorName));
        });

    });
     
  })
  .catch(error => {
    console.log("The article data was not returned",error);
});




// ************** Function to createCard
function createCard(headline,authorPhoto,authorName) {
    const divCard=document.createElement('div');
    divCard.classList.add('card');

    const divHeadline=document.createElement('div');
    divHeadline.classList.add('headline');
    divHeadline.textContent=headline;
    divCard.appendChild(divHeadline);

    const divAuthor=document.createElement('div');
    divAuthor.classList.add('author');
    divCard.appendChild(divAuthor);

    const divImgCtr=document.createElement('div');
    divImgCtr.classList.add('img-container');
    divAuthor.appendChild(divImgCtr);

    const img=document.createElement('img');
    img.src=authorPhoto;
    divImgCtr.appendChild(img);

    const span=document.createElement('span');
    span.textContent=`By ${authorName}`;
    divAuthor.appendChild(span);

    return divCard;
}


// ************** Test the function createCard by itself
// const headline = "ES8: The Next Step",
//     authorPhoto = "./assets/sir.jpg",
//     authorName = "SIR RUFF'N'STUFF";
// addPointCards.appendChild(createCard(headline,authorPhoto,authorName));
