var nextButton = document.querySelector("#nextPicture");
var prevButton = document.querySelector("#prevPicture");
var liImage = document.querySelectorAll("li");

var counter = 0;

liImage[0].classList.add("visible");

nextButton.addEventListener("click", function () {
    //console.log("click next");
    if (counter >= liImage.length - 1) {
        liImage[counter].classList.remove("visible");
        counter = 0;
        liImage[counter].classList.add("visible");
    }

    else
         {
            liImage[counter].classList.remove("visible");
            counter++;
            liImage[counter].classList.add("visible");
        }
});

prevButton.addEventListener("click", function () {
    //console.log("click prev");
    if (counter <= 0) {
        liImage[counter].classList.remove("visible");
        counter = liImage.length - 1;
        liImage[counter].classList.add("visible");
    }

    else
        {
            liImage[counter].classList.remove("visible");
            counter--;
            liImage[counter].classList.add("visible");
        }
});
