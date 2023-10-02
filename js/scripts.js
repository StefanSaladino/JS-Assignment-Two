// constants for query selector
const studentIDPara = document.getElementById("myStudentId");
const customColor = document.querySelector(".custColor");
const customNumberInput = document.getElementById("customNumber");
const randomColor = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];
const displayNames = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];
const displayImage = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {
  studentIDPara.textContent = "200551988";
  backgroundController();
}

// function to change bg color from random no.
function changeRandomColor() {
  // Generate a random number between 1 and 100 (inclusive)
  const randomNum = Math.floor(Math.random() * 100) + 1;
  customNumberInput.value = randomNum;
  backgroundController();
}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
  // Check if the number of existing options is equal to the number of images
  if (imageSelect.options.length-1 === images.length) {
    return;
  }
    // Create and append options for each image source
    for (let i = 0; i < images.length; i++) {
      const option = document.createElement("option");
      option.value = images[i];
      option.textContent = displayNames[i];
      imageSelect.appendChild(option);
    }
  }


// function to change image
function changeImage() {
  // Get the selected option value
  const selectedImage = imageSelect.value;
  // Set the src attribute of the image element to the selected image
  displayImage.src = selectedImage;
}

//function to control the BG colour based on the user input
//This function can be reused for both the custom and random background selector
function backgroundController() {
  // Get the user's input value as a number
  const userInput = parseFloat(customNumberInput.value);
  // Use if and else if statements to change the background color based on the user's input
  if (isNaN(userInput)) {
    studentIDPara.textContent = "Please enter a valid number";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.15)"; //invalid numbers display grey BG
  } else if (userInput < 0 || userInput > 100) {
    document.body.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Red
  } else if (userInput >= 0 && userInput <= 20) {
    document.body.style.backgroundColor = "rgba(0, 128, 0, 0.5)"; // Green
  } else if (userInput > 20 && userInput <= 40) {
    document.body.style.backgroundColor = "rgba(0, 0, 255, 0.5)"; // Blue
  } else if (userInput > 40 && userInput <= 60) {
    document.body.style.backgroundColor = "rgba(255, 165, 0, 0.5)"; // Orange
  } else if (userInput > 60 && userInput <= 80) {
    document.body.style.backgroundColor = "rgba(128, 0, 128, 0.5)"; // Purple
  } else if (userInput > 80 && userInput <= 100) {
    document.body.style.backgroundColor = "rgba(255, 255, 0, 0.5)"; // Yellow
  }
}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", changeCustomColor);
randomColor.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);

// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
