document.addEventListener('DOMContentLoaded', () => {
    const garden = document.querySelector('.garden');
  
    // Create stars
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      starsContainer.appendChild(star);
    }
    document.body.appendChild(starsContainer);
  
    // Create ground
    const ground = document.createElement('div');
    ground.classList.add('ground');
    garden.appendChild(ground);
  
    function createFlower(x, y) {
      const flower = document.createElement('div');
  
      // Randomly choose a flower type
      const flowerTypes = ['rose', 'lavender', 'sunflower'];
      const randomType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      flower.classList.add('flower', randomType);
      flower.style.left = `${x - 2.5}px`;  // Centering based on the thinner width
  
      garden.appendChild(flower);
  
      // Create and append leaves
      for (let i = 0; i < 2; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        flower.appendChild(leaf);
      }
  
      // Create and append petals based on flower type
      if (randomType === 'rose') {
        for (let i = 0; i < 3; i++) {
          const petal = document.createElement('div');
          petal.classList.add('petal');
          flower.appendChild(petal);
        }
      } else if (randomType === 'lavender') {
        for (let i = 0; i < 5; i++) {
          const petal = document.createElement('div');
          petal.classList.add('petal');
          petal.style.setProperty('--i', i);
          flower.appendChild(petal);
        }
      } else if (randomType === 'sunflower') {
        for (let i = 0; i < 4; i++) {
          const petal = document.createElement('div');
          petal.classList.add('petal');
          flower.appendChild(petal);
        }
        const center = document.createElement('div');
        center.classList.add('center');
        flower.appendChild(center);
      }
  
      const randomHeight = Math.random() * 150 + 50; // Random height between 50px and 200px
      setTimeout(() => {
        flower.style.height = `${randomHeight}px`;
        flower.querySelectorAll('.leaf').forEach(leaf => {
          leaf.style.opacity = 1;
        });
        flower.querySelectorAll('.petal').forEach(petal => {
          petal.style.opacity = 1;
        });
        if (randomType === 'sunflower') {
          flower.querySelector('.center').style.opacity = 1;
        }
        flower.classList.add('grow'); // Adding sway animation
      }, 100);
    }
  
    garden.addEventListener('click', (event) => {
      const rect = garden.getBoundingClientRect();
      createFlower(event.clientX - rect.left, event.clientY - rect.top);
    });
  });
  