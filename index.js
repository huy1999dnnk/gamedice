var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImages = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber2 + ".png";

var imageSource1 = "images/" + randomImage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource1);

if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "⚑ Player 2 win";
}
else if (randomNumber2 < randomNumber1)
{
    document.querySelector("h1").innerHTML = "⚑ Player 1 win";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}