"use strict";
const camera1 = document.querySelector(".CAMERA1");
const camera2 = document.querySelector(".CAMERA2");
const camera3 = document.querySelector(".CAMERA3");
const camera4 = document.querySelector(".CAMERA4");
const myresults = async () => {
  var myData1;
  var myData2;
  var myData3;
  var myData4;
  const resData = await fetch("product1.json");
  let res = await resData.json();
  // console.log(res.productPart[0].products);
  myData1 = res.productPart[0].products;
  myData2 = res.productPart[1].products;
  myData3 = res.productPart[2].products;
  myData4 = res.productPart[3].products;
  // console.log(myData);
  myData1.map((cam) => {
    // console.log(cam.url);
    let resolvedData1 = `                            <div class="item0">
        <div id="card" class="card" style="width: 18rem;">
            <img src="${cam.url}"
                class="card-img-top" alt="watches">
            <div class="card-body">
                <h5 class="card-title">${cam.title}</h5>
                <p class="card-text">${cam.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li id="card" class="list-group-item">
                    <span class="star-one"><i class="fa-solid fa-star"></i></span>
                    <span class="star-two"><i class="fa-solid fa-star"></i></span>
                    <span class="star-three"><i class="fa-solid fa-star"></i></span>
                    <span class="star-four"><i class="fa-solid fa-star"></i></span>
                    <span class="star-five"><i class="fa-solid fa-star"></i></span>
                </li>

            </ul>
            <div class="card-body">
                <a href="lstorage.html"><button class="card-link">CART</button></a>
                <a href="lstorage.html"><button class="card-link">BUY</button></a>
            </div>
        </div>
    </div>`;

    camera1.innerHTML += resolvedData1;
  });

//   MAPS-2
myData2.map((cam) => {
    // console.log(cam.url);
    let resolvedData2 = `                            <div class="item0">
        <div id="card" class="card" style="width: 18rem;">
            <img src="${cam.url}"
                class="card-img-top" alt="watches">
            <div class="card-body">
                <h5 class="card-title">${cam.title}</h5>
                <p class="card-text">${cam.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li id="card" class="list-group-item">
                    <span class="star-one"><i class="fa-solid fa-star"></i></span>
                    <span class="star-two"><i class="fa-solid fa-star"></i></span>
                    <span class="star-three"><i class="fa-solid fa-star"></i></span>
                    <span class="star-four"><i class="fa-solid fa-star"></i></span>
                    <span class="star-five"><i class="fa-solid fa-star"></i></span>
                </li>

            </ul>
            <div class="card-body">
                <a href="lstorage.html"><button class="card-link">CART</button></a>
                <a href="lstorage.html"><button class="card-link">BUY</button></a>
            </div>
        </div>
    </div>`;

    camera2.innerHTML += resolvedData2;
  });

  //   MAPS-3
myData3.map((cam) => {
    // console.log(cam.url);
    let resolvedData3 = `                            <div class="item0">
        <div id="card" class="card" style="width: 18rem;">
            <img src="${cam.url}"
                class="card-img-top" alt="watches">
            <div class="card-body">
                <h5 class="card-title">${cam.title}</h5>
                <p class="card-text">${cam.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li id="card" class="list-group-item">
                    <span class="star-one"><i class="fa-solid fa-star"></i></span>
                    <span class="star-two"><i class="fa-solid fa-star"></i></span>
                    <span class="star-three"><i class="fa-solid fa-star"></i></span>
                    <span class="star-four"><i class="fa-solid fa-star"></i></span>
                    <span class="star-five"><i class="fa-solid fa-star"></i></span>
                </li>

            </ul>
            <div class="card-body">
                <a href="lstorage.html"><button class="card-link">CART</button></a>
                <a href="lstorage.html"><button class="card-link">BUY</button></a>
            </div>
        </div>
    </div>`;

    camera3.innerHTML += resolvedData3;
  });

  //   MAPS-2
myData4.map((cam) => {
    // console.log(cam.url);
    let resolvedData4 = `                            <div class="item0">
        <div id="card" class="card" style="width: 18rem;">
            <img src="${cam.url}"
                class="card-img-top" alt="watches">
            <div class="card-body">
                <h5 class="card-title">${cam.title}</h5>
                <p class="card-text">${cam.description}</p>
            </div>
            <ul class="list-group list-group-flush">

                <li id="card" class="list-group-item">
                    <span class="star-one"><i class="fa-solid fa-star"></i></span>
                    <span class="star-two"><i class="fa-solid fa-star"></i></span>
                    <span class="star-three"><i class="fa-solid fa-star"></i></span>
                    <span class="star-four"><i class="fa-solid fa-star"></i></span>
                    <span class="star-five"><i class="fa-solid fa-star"></i></span>
                </li>

            </ul>
            <div class="card-body">
                <a href="lstorage.html"><button class="card-link">CART</button></a>
                <a href="lstorage.html"><button class="card-link">BUY</button></a>
            </div>
        </div>
    </div>`;

    camera4.innerHTML += resolvedData4;
  });

};
myresults();

// test function
function getScrollPercentage(mk) {
    return ((scrollPos[mk].parentElement.scrollLeft / (scrollPos[mk].parentElement.scrollWidth - scrollPos[mk].parentElement.clientWidth)) * 100);
}


const prev=document.querySelectorAll(".btn-pre1");
const nex=document.querySelectorAll(".btn-next1");
const scrollPos=document.querySelectorAll(".slider-inner0");
const scrollSlider=document.querySelectorAll(".slider0");
let scrolled=0;

for(let i=0,j=0,k=0;i<prev.length && j<nex.length && k<scrollPos.length;i++,j++,k++)
{
    prev[i].addEventListener("click",function(){
        // console.log(`The prev button no ${i} got pressed!!`);
        let pVal=getScrollPercentage(i);
        // console.log(pVal);
        if (pVal >= 0 && pVal <= 100) {
            scrolled = scrolled - 300;
            scrollSlider[i].scrollLeft = scrolled;
            console.log(scrolled);
        }
        if (pVal <= 0) {
            scrolled=100;
        }
    });

    nex[j].addEventListener("click",function(){
      
        // console.log(`The next button no ${j} got pressed!!`);
        let pVal=getScrollPercentage(j);
        console.log(pVal);
        if (pVal >= 0 && pVal <= 100) {
            scrolled = scrolled + 300;
            scrollSlider[j].scrollLeft = scrolled;
            console.log(scrolled);
        }
        if (pVal >= 80) {
            scrolled=0;
        }
    });
}