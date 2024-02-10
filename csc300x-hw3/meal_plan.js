//global price variable for tracking how much all things are together:
let totalAmount = 0;
updateTotalAmount(totalAmount);

document.addEventListener('DOMContentLoaded', function() {
    const mealChoicesSushi = document.getElementById('meal-choices-sushi');
    const mealChoicesBoba = document.getElementById('meal-choices-boba');
    const mealChoicesAstro = document.getElementById('meal-choices-astro');


    //when running through all meal-choices, create a list item for each in their corresponding sections
    recommendedMealsSushi.forEach(meal => {
        const listItem= createListItem(meal, mealChoicesSushi);
    });

    recommendedMealsBoba.forEach(meal => {
        const listItem = createListItem(meal, mealChoicesBoba);
    });

    recommendedMealsAstro.forEach(meal => {
        const listItem= createListItem(meal, mealChoicesAstro);
    });

    
});

function createListItem(meal, container) {
    //link the meal item to its corresponding recommendedMeal list
    const listItem = document.createElement('li');
    listItem.className = 'meal-item';
    listItem.innerHTML = `<strong>${meal.title}</strong> - \$${meal.price} <button id="add-to-plan-btn">Add to Plan</button><br>${meal.description}`;

    //Set a data item attribute to store the price to be extracted for total  calculations
    listItem.dataset.price = meal.price;

    container.appendChild(listItem);

    const addToPlanButton = listItem.querySelector('#add-to-plan-btn');
    addToPlanButton.addEventListener('click', function() {
        handleMealClick(meal, listItem);
    });

    return listItem;
}

function handleMealClick(selectedMeal, selectedListItem) {
    const mealPlanSection = document.getElementById('meal-plan');
    //get out the price to be added to total:
    const price = parseFloat(selectedListItem.dataset.price);

    const mealPlanItem = document.createElement('div');
    mealPlanItem.className = 'meal-plan-item';
    mealPlanItem.innerHTML = `<strong>${selectedMeal.title}</strong> - ${selectedMeal.price} <button id="remove-from-plan-btn">Remove</button>`;

    //add the item's price to the current amount stored
    totalAmount += price;
    updateTotalAmount(totalAmount);

    const removeFromPlanButton = mealPlanItem.querySelector('#remove-from-plan-btn')
    removeFromPlanButton.addEventListener('click', function() {
        handleRemoveMeal(mealPlanItem, price);
    });

    mealPlanSection.appendChild(mealPlanItem);
}

function handleRemoveMeal (mealPlanItem, removedItemPrice) {
    //remove the price of the item from the total:
    totalAmount -= removedItemPrice;
    updateTotalAmount(totalAmount);
    //remove the item from the meal plan
    mealPlanItem.remove();
}

function updateTotalAmount(newTotalAmount) {
    //update the total amount displayed by the global variable by 2 decimal points
    document.getElementById('total-info').innerText = newTotalAmount.toFixed(2)
}

const recommendedMealsSushi = [
    {
        title: 'Philadelphia Roll',
        description: 'The philadelphia roll is wrapped up with avocado, smoked salmon, and cream cheese.',
        price: '8.00'
    },
    {
        title: 'Crispy Spicy Tuna Roll',
        description: 'The spicy tuna sushi roll is made with tuna, avocado, and crab. All that is then fried and topped with spicy aioli.',
        price: '11.00'
    },
    {
        title: 'Rainbow Roll',
        description: 'The Rainbow Roll is a combination of various fish, avocado, and cucumber. Each slice showcases a different topping.',
        price: '12.50'
    }
]

const recommendedMealsBoba = [
    {
        title: 'Fresh Spring Rolls',
        description: 'These spring rolls are filled with lettuce, bean sprouts, basil, cucumbers, cilantro and vermicelli all wrapped up in rice paper. You get to choose between vegan "ribs", "shrimp", or Avocado for the filling. Served with a creamy peanut sauce or sweet-chili sauce.',
        price: '7.00'
    },
    {
        title: 'Tate Street Melting Pot',
        description: 'Wok-fried seasoned rice with shiitake mushrooms and “chicken”. Served in a sizzling clay pot and topped with cilantro.',
        price: '16.00'
    },
    {
        title: 'Pad Thai',
        description: 'Flat rice noodles stir-fried with green onions, bean sprouts, and tofu-“egg”. Topped with fresh cilantro served with sweet-chili sauce.',
        price: '14.00'
    }
]

const recommendedMealsAstro = [
    {
        title: 'Astro Corn Dogs',
        description: 'A single corn dog comes in 8 different flavors for a universally grandeous number of ways to enjoy them.',
        price: '7.50'
    },
    {
        title: 'Loaded Crater Tots',
        description: 'Traditional Tater tots w/ Cheese sauce & Hot Cheetos Dust.',
        price: '6.00'
    },
    {
        title: 'Korean Corn Chili',
        description: 'Made from corn, bell peppers, butter and mozzarella cheese.',
        price: '5.00'
    }
]