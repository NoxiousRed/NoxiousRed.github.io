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
    const imgPrice = document.getElementById('img-price');
    const imgDisclaimer = document.getElementById('img-disclaimer');
    const dishContainer = document.querySelector('.enlarged-img-container');

    //getting the details of the clicked image
    const details = imageDetails.find(item => item.src === clickedImg.src)
    imgTitle.textContent = details.title;
    imgDescription.textContent = details.description;
    imgPrice.textContent = details.price;
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
        price: '$8.00',
        disclaimer: 'Image courtesy of aviglatt.com'
    },
    {
        src:'https://gracefoods.com/images/Recipes2018/iStock-495774966.jpg',
        title: 'Crispy Spicy Tuna Roll',
        description: 'Just the right amount of kick! The spicy tuna sushi roll is made with tuna, avocado, and crab. All that is then fried and topped with spicy aioli.',
        price: '$11.00',
        disclaimer: 'Image courtesy of gracefoods.com'
    },
    {
        src:'https://www.tasteatlas.com/images/dishes/8082ea9f08b94119b0110ccd40a5e2ea.jpg',
        title: 'Rainbow Roll',
        description: 'A vibrant and colorful sushi experience! The Rainbow Roll is a combination of various fish, avocado, and cucumber, creating a visually appealing (and tasty) roll. Each slice showcases a different topping, so if you are not sure what you like, give it a try!',
        price: '$12.50',
        disclaimer: 'Image courtesy of tasteatlas.com'
    },
    {
        src:'https://media-cdn.tripadvisor.com/media/photo-s/05/b7/26/a9/fresh-spring-rolls.jpg',
        title: 'Fresh Spring Rolls',
        description: 'Super fresh and delicious, a staple starter anywhere! These spring rolls are filled with lettuce, bean sprouts, basil, cucumbers, cilantro and vermicelli all wrapped up in rice paper. You get to choose between vegan "ribs", "shrimp", or Avocado for the filling. Served with a creamy peanut sauce or sweet-chili sauce.',
        price: '$7.00',
        disclaimer: 'Image courtesy of tripadvisor.com'
    },
    {
        src:'https://versieats-assets-prod.s3.us-east-2.amazonaws.com/images/merchant/211/melt%20pot.PNG',
        title: 'Tate Street Melting Pot',
        description: 'A nice hearty meal to keep you going! Wok-fried seasoned rice with shiitake mushrooms and “chicken”. Served in a sizzling clay pot and topped with cilantro.',
        price: '$16.00',
        disclaimer: 'Image courtesy of versieats.com'
    },
    {
        src:'https://versieats-assets-prod.s3.us-east-2.amazonaws.com/images/merchant/211/pad%20thai.PNG',
        title: 'Pad Thai',
        description: 'Wok-and-Roll with this delicious dish! Flat rice noodles stir-fried with green onions, bean sprouts, and tofu-“egg”. Topped with fresh cilantro served with sweet-chili sauce.',
        price: '$14.00',
        disclaimer: 'Image courtesy of versieats.com'
    },
    {
        src:'',
        title: '',
        description: '',
        price: '',
        disclaimer: ''
    },
    {
        src:'',
        title: '',
        description: '',
        price: '',
        disclaimer: ''
    },
    {
        src:'',
        title: '',
        description: '',
        price: '',
        disclaimer: ''
    },
]