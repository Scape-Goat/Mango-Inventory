var fileNames = ["ArrowsetOfHod2","ArrowsHod","BeltOfOverconfidence","BolasOfOverwhelmingForce","Bondcutter","ClimbersSnare","daggerofthedeep","DumbbellOfFlexing","Gravediggercloak","Guillotine","MaskoftheOni","mimicinabottle","RuinedBlade","Slimeshot","Steelsong"]
fileNames.sort()
fileNames.forEach(fileName => {
    var cardItemDiv = document.createElement("div")
    cardItemDiv.className = "card_item"

    var cardTopDiv = document.createElement("div")
    cardTopDiv.className = "card_top"

    var cardBottomDiv = document.createElement("div")
    cardBottomDiv.className = "card_bottom"

    var cardCostDiv = document.createElement("div")
    cardCostDiv.className = "card_cost"

    var cardImg = document.createElement("img")
    cardImg.className = "card_img"
    cardImg.src = "Items/Cropped/"+fileName+"_Img.png" 

    var cardDesc = document.createElement("img")
    cardDesc.className = "card_desc"
    cardDesc.src = "Items/Cropped/"+fileName+"_Desc.png" 


    cardTopDiv.appendChild(cardImg)
    cardTopDiv.appendChild(cardDesc)
    cardBottomDiv.appendChild(cardCostDiv)
    cardItemDiv.appendChild(cardTopDiv)
    cardItemDiv.appendChild(cardBottomDiv)
    document.getElementById("cardWrap").appendChild(cardItemDiv)
});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

