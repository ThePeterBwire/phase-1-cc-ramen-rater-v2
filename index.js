function displayRamens() {
    fetch('http://localhost:3000/ramens')
      .then(response => response.json())
      .then(ramens => {
        const ramenMenu = document.getElementById('ramen-menu');
        ramens.forEach(ramen => {
          const img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', () => handleClick(ramen));
          ramenMenu.appendChild(img);
        });
      });
  }
  
  function handleClick(ramen) {
    const detailImage = document.querySelector('.detail-image');
    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    document.querySelector('.name').textContent = ramen.name;
    document.querySelector('.restaurant').textContent = ramen.restaurant;
    document.getElementById('rating-display').textContent = ramen.rating;
    document.getElementById('comment-display').textContent = ramen.comment;
  }
  
  function addSubmitListener() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const newRamen = {
        name: document.getElementById('new-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        image: document.getElementById('new-image').value,
        rating: document.getElementById('new-rating').value,
        comment: document.getElementById('new-comment').value
      };
  
      const img = document.createElement('img');
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.addEventListener('click', () => handleClick(newRamen));
      document.getElementById('ramen-menu').appendChild(img);
  
      form.reset();
    });
  }
  
  function main() {
    displayRamens();
    addSubmitListener();
  }
  
  document.addEventListener('DOMContentLoaded', main);