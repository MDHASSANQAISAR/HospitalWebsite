let card = document.querySelectorAll(".reveiwCard");
let icon = document.getElementById("icon");
let count = 0;
let surgery = document.querySelectorAll(".card")

card.forEach(function (cards, index) {
    cards.style.left = `${index * 100}%`
})

function myFun() {
    card.forEach(function (currVal) {
        currVal.style.transform = `translateX(-${count * 100}%)`
    })
}

setInterval(function () {
    count++;
    if (card.length == count) {
        count = 0;
    }
    myFun();
}, 2000)


icon.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("mode");
})

surgery.forEach(function (currCard) {

    currCard.addEventListener("click", function () {
      
        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML = `
        <img  id="cross" src="Image/crossIcon.png" alt="">
         <img src=${currCard.firstElementChild.src} alt="">
          <h1>${currCard.lastElementChild.innerHTML}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iusto facere hic ex dignissimos incidunt ad doloremque eligendi commodi repudiandae.
          </p>
         `

         document.querySelector("body").append(div);
         let cross=document.getElementById("cross");
        cross.addEventListener("click",function(){
            div.remove();
        })

    })
})