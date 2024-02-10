//So that all restaurants have their own section, make sure each restaurant section can be checked individually
const restaurantSections = document.querySelectorAll('.restaurant-section');

restaurantSections.forEach(section => {
    //selecting all elements in class "food-pic" within each section
    const images = section.querySelectorAll('.food-pic');
    const dishContainer = section.querySelector('.enlarged-img-container');

    //Keeping track of the previously clicked image, so we know what to make hidden and what to return
    let previousClickedImage = null;

    //Any time an image is clicked, send displayDescription its section information
    images.forEach(img => img.addEventListener('click', () => displayDescription(section.dataset.section, img)));

    function displayDescription(sectionType, clickedImg) {

        //Find all sections that are NOT the current one, make them visible if they are not the clicked image
        const otherSections = Array.from(restaurantSections).filter(otherSection => otherSection !== section);
        otherSections.forEach(otherSection => {
            const otherImages = otherSection.querySelectorAll('.food-pic');
            otherImages.forEach(otherImage => otherImage.classList.remove('hidden'));

            //hide description container of other sections if it is not already hidden
            otherSection.querySelector('.enlarged-img-container').style.display = 'none';
        });

        //This if block will restore the previously clicked image to the screen
        if (previousClickedImage !== null) {
            previousClickedImage.classList.remove('hidden');
        }
        //Hides the image from the lineup of 3 for each restaurant, replaced later if another image is selected
        clickedImg.classList.add('hidden');
        previousClickedImage = clickedImg;

        //All details connecting the image clicked to its corresponding imageDetails
        const enlargedImg = section.querySelector('.enlarged-img');
        const imgTitle = section.querySelector('.img-title');
        const imgDescription = section.querySelector('.img-description');
        const imgPrice = section.querySelector('.img-price');
        const imgDisclaimer = section.querySelector('.img-disclaimer');
        const dishContainer = section.querySelector('.enlarged-img-container');

        //getting the details of the clicked image
        const details = imageDetails.find(item => item.src === clickedImg.src)
        //Associating all details about the image with its data
        imgTitle.textContent = details.title;
        imgDescription.textContent = details.description;
        imgPrice.textContent = details.price;
        imgDisclaimer.textContent = details.disclaimer;
        //Associating the enlarged image with the one that was clicked
        enlargedImg.src = clickedImg.src;
        dishContainer.style.display = 'flex';
    }

    //dish container gets hidden when clicked
    dishContainer.addEventListener('click', restoreHidden)

    //runs when the dish container image is clicked
    function restoreHidden(event) {
        //hide the description container
        this.style.display = 'none';
        //restore any hidden images in the same section
        const hiddenImage = section.querySelector('.food-pic.hidden');
        if (hiddenImage) {
            hiddenImage.classList.remove('hidden');
        }
    }

});

const imageDetails = [
    {
        src: 'https://www.aviglatt.com/ncmedia/ncproducts/PS499.jpg',
        title: 'Philadelphia Roll',
        description: 'A sushi classic, made exactly right! The philadelphia roll (or Philly roll) is wrapped up with avocado, smoked salmon, and cream cheese. If you like Lox bagels, you will love the philadelphia roll!',
        price: '$8.00',
        disclaimer: 'Image courtesy of aviglatt.com'
    },
    {
        src: 'https://gracefoods.com/images/Recipes2018/iStock-495774966.jpg',
        title: 'Crispy Spicy Tuna Roll',
        description: 'Just the right amount of kick! The spicy tuna sushi roll is made with tuna, avocado, and crab. All that is then fried and topped with spicy aioli.',
        price: '$11.00',
        disclaimer: 'Image courtesy of gracefoods.com'
    },
    {
        src: 'https://www.tasteatlas.com/images/dishes/8082ea9f08b94119b0110ccd40a5e2ea.jpg',
        title: 'Rainbow Roll',
        description: 'A vibrant and colorful sushi experience! The Rainbow Roll is a combination of various fish, avocado, and cucumber, creating a visually appealing (and tasty) roll. Each slice showcases a different topping, so if you are not sure what you like, give it a try!',
        price: '$12.50',
        disclaimer: 'Image courtesy of tasteatlas.com'
    },
    {
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/05/b7/26/a9/fresh-spring-rolls.jpg',
        title: 'Fresh Spring Rolls',
        description: 'Super fresh and delicious, a staple starter anywhere! These spring rolls are filled with lettuce, bean sprouts, basil, cucumbers, cilantro and vermicelli all wrapped up in rice paper. You get to choose between vegan "ribs", "shrimp", or Avocado for the filling. Served with a creamy peanut sauce or sweet-chili sauce.',
        price: '$7.00',
        disclaimer: 'Image courtesy of tripadvisor.com'
    },
    {
        src: 'https://versieats-assets-prod.s3.us-east-2.amazonaws.com/images/merchant/211/melt%20pot.PNG',
        title: 'Tate Street Melting Pot',
        description: 'A nice hearty meal to keep you going! Wok-fried seasoned rice with shiitake mushrooms and “chicken”. Served in a sizzling clay pot and topped with cilantro.',
        price: '$16.00',
        disclaimer: 'Image courtesy of versieats.com'
    },
    {
        src: 'https://versieats-assets-prod.s3.us-east-2.amazonaws.com/images/merchant/211/pad%20thai.PNG',
        title: 'Pad Thai',
        description: 'Wok-and-Roll with this delicious dish! Flat rice noodles stir-fried with green onions, bean sprouts, and tofu-“egg”. Topped with fresh cilantro served with sweet-chili sauce.',
        price: '$14.00',
        disclaimer: 'Image courtesy of versieats.com'
    },
    {
        src: 'https://img1.wsimg.com/isteam/ip/80d46b3f-cfdc-4d83-bd86-928bfe95349f/Hero%20Shot_Astros%20Corn%20Dogs_1.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:75.03%25/rs=w:600,h:300,cg:true',
        title: 'Astro Corn Dogs',
        description: 'Did you really think you would walk away without getting one of these? A single corn dog comes in 8 different flavors for a universally grandeous number of ways to enjoy them. I suggest you get one of every kind, because they are just that good!',
        price: 'Price varies: $7.50 - $9.00',
        disclaimer: 'Image courtesy of astrocorndogs.com'
    },
    {
        src: 'https://img1.wsimg.com/isteam/ip/80d46b3f-cfdc-4d83-bd86-928bfe95349f/Loaded%20Tots_Astros%20Corn%20Dogs_2.jpg/:/cr=t:7.43%25,l:0%25,w:100%25,h:74.99%25/rs=w:388,h:194,cg:true',
        title: 'Loaded Crater Tots',
        description: 'Traditional Tater tots w/ Cheese sauce & Hot Cheetos Dust. If that does not peak your interest I am not sure what will!',
        price: '$6.00',
        disclaimer: 'Image courtesy of astrocorndogs.com'
    },
    {
        src: 'https://img1.wsimg.com/isteam/ip/80d46b3f-cfdc-4d83-bd86-928bfe95349f/Image%204-21-23%20at%209.45%20PM.jpg/:/cr=t:29.48%25,l:0%25,w:100%25,h:34.44%25/rs=w:388,h:194,cg:true',
        title: 'Korean Corn Chili',
        description: 'A Korean traditional corn dish! Made from corn, bell peppers, butter and mozzarella cheese. Supremely delicious and sure to make your day much more tasty!',
        price: '$5.00',
        disclaimer: 'Image courtesy of astrocorndogs.com'
    }
]