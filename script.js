const createStars = (layer, numStars, sizeRange) => {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position and size
    const size = Math.random() * sizeRange + 1; // Random size between 1px and sizeRange
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 134}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 20}s`; // Random animation delay

    layer.appendChild(star);
  }
};

// Create stars for each layer
const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const layer3 = document.getElementById('layer3');

// Add stars with varying sizes
createStars(layer1, 100, 1); // Small stars
createStars(layer2, 70, 2);  // Medium stars
createStars(layer3, 50, 3);  // Large stars

// Mouse parallax effect
document.body.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  layer1.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  layer2.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  layer3.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
});
