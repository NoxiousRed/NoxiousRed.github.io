const imgArray = document.querySelectorAll('img')

for (let index=0; index < imgArray.length; index++) {
    const element = imgArray[index];
    element.addEventListener('click', displayDescription)
}