const imgArray = document.querySelectorAll('.food-pic');

for (let index = 0; index < imgArray.length; index++) {
    const element = imgArray[index];
    element.addEventListener('click', displayDescription);
}

//Keeping track of which image is the current one clicked.
let previousClickedImage = null;

function displayDescription(event) {
    //This if block will restore the previously clicked image to the screen
    if (previousClickedImage !== null){
        previousClickedImage.classList.remove('hidden');
    }
    //Hides the image from the lineup of 3, replaced later if another image is selected
    const clickedImg = event.currentTarget;
    clickedImg.classList.add('hidden');
    previousClickedImage = clickedImg;

    const enlargedImg = document.getElementById('enlarged-img');
    const imgTitle = document.getElementById('img-title');
    const imgDescription = document.getElementById('img-description');
    const imgDisclaimer = document.getElementById('img-disclaimer')
    const dishContainer = document.querySelector('.enlarged-img-container');

    //getting the details of the clicked image
    const details = imageDetails.find(item => item.src === clickedImg.src)
    imgTitle.textContent = details.title;
    imgDescription.textContent = details.description;
    imgDisclaimer.textContent = details.disclaimer;
    //Associating the enlarged image with the one that was clicked
    enlargedImg.src = clickedImg.src;
    dishContainer.style.display = 'flex';
}

const dishContainer = document.querySelector('.enlarged-img-container')

dishContainer.addEventListener('click', hideDescription)

function hideDescription(event) {
    this.style.display = 'none';
}

const imageDetails = [
    {
        src:'https://www.aviglatt.com/ncmedia/ncproducts/PS499.jpg',
        title: 'Philadelphia Roll',
        description: 'A sushi classic, made exactly right! The philadelphia roll (or Philly roll) is wrapped up with avocado, smoked salmon, and cream cheese. If you like Lox bagels, you will love the philadelphia roll!',
        disclaimer: 'Image courtesy of aviglatt.com'
    }
]