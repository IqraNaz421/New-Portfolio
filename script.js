const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to show the current item
function showItem(index) {
  items.forEach((item, i) => {
    item.classList.remove('opacity-100');
    if (i === index) {
      item.classList.add('opacity-100');
    }
  });
}

// Show the first item initially
showItem(currentIndex);

// Event listener for next button
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

// Event listener for previous button
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});
