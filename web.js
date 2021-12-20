//Selecting all classes with gallery-img
let galleryImages = document.querySelectorAll(".gallery-img");

let getLatestOpenedImg;

//storing our window with in the windowWith variable
let windowWith = window.innerWidth;



if(galleryImages) {
   galleryImages.forEach(function (item, index) {
       item.onclick = function () {
           //This gets the styling of all the image items
           let getElementCss = window.getComputedStyle(item);
           //This gets the exact style property value which is the background-image Url
           let getFullImageUrl = getElementCss.getPropertyValue("background-image");
           //This splits them differently to be able to be used
           let getImageUrlPositon = getFullImageUrl.split("img/thumbs/");
          let setNewImageUrl = getImageUrlPositon[1].replace('")', '');
          getLatestOpenedImg = index++;

          let container = document.body;
          //Creating the thumb image container
          let newImgWindow = document.createElement('div')
          container.appendChild(newImgWindow);
          newImgWindow.setAttribute("class", "img-window");
          newImgWindow.setAttribute("onclick", "closeImg()");
          //creating New image Element
          let newImg = document.createElement("img")
          newImg.setAttribute("id", "current-img")
          newImg.setAttribute("src", "img/" + setNewImageUrl)
          newImgWindow.appendChild(newImg)
        //Creating an onload event
          newImg.onload = function () {
            let imgWith = this.width;
            //let calcImgToEdge = ((windowWith - imgWith) / 2) - 80

         //Creating a btn to make images go to Next
          let newNextBtn = document.createElement('a');
          newNextBtn.textContent = "Next"
         container.appendChild(newNextBtn);
         newNextBtn.setAttribute("class", "img-btn-next")
         newNextBtn.setAttribute("onclick", "changeImg(1)");
        // newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
                        //Creating a btn to make images go to Previous
         let newPrevBtn = document.createElement('a');
         newPrevBtn.textContent = "Prev"
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev")
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        //newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";

          }

       }
   });
}


function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove()
    document.querySelector(".img-btn-prev").remove()
}

function changeImg(changeDirection) {
    document.querySelector("#current-img").remove();
    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img")
    getImgWindow.appendChild(newImg);
    let linkImg;

    if(changeDirection === 1) {
        linkImg = getLatestOpenedImg + 1;

        if(linkImg > galleryImages.length) {
            linkImg = 1;
        }
    }else if(changeDirection === 0) {
        linkImg = getLatestOpenedImg- 1;
        if (linkImg < 1) {
            linkImg = galleryImages.length;
        }
    }
     newImg.setAttribute("src", "img/portfolio" + linkImg + ".jpg");
     newImg.setAttribute("id", "current-img");
     getLatestOpenedImg = linkImg;
     /*newImg.onload = function() {
        let imgWith = this.width
        let calcImgToEdge = ((windowWith - imgWith) / 2) - 80;
        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText =  "right: " + calcImgToEdge + "px;";
        let prevBtn = document.querySelector(".img-btn-prev")
        prevBtn.style.cssText =  "left: " + calcImgToEdge + "px;";

    }*/

}








