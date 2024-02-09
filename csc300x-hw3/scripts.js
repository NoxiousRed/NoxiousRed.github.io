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
    const clickedImg = event.currentTarget;
    clickedImg.classList.add('hidden');
    previousClickedImage = clickedImg;

    const enlargedImg = document.getElementById('enlarged-img');
    const imgTitle = document.getElementById('img-title');
    const dishDescription = document.getElementById('img-description');
    const dishContainer = document.querySelector('.enlarged-img-container');

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
        description: 'A sushi classic, made exactly right! The philadelphia roll (or Philly roll) is wrapped up with avocado, smoked salmon, and cream cheese. If you like Lox bagels, you will love the philadelphia roll!'
    }
]