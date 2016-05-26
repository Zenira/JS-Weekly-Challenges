// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
planet = createCelestialBody('planet', '100px', '100px', '200px', '#00519b', '-10px -10px 45px rgba(0,0,0,0.55) inset');
document.body.appendChild(planet);

// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
moon = createCelestialBody('moon', '50px', '50px', '40px', 'yellow', '10px 10px 6px rgba(0,0,0,0.5),8px 8px 3px rgba(0,0,0,0.5), -5px -5px 10px rgba(0,0,0,0.45) inset');

document.getElementsByClassName('planet')[0].appendChild(moon);

function createCelestialBody(eleName, width, height, radius, color, shadow) {
  var celestialBody = document.createElement(eleName);
  celestialBody.className = eleName;
  celestialBody.style.backgroundColor = color;
  celestialBody.style.width = width;
  celestialBody.style.height = height;
  celestialBody.style.display = 'inline-block';
  celestialBody.style.borderRadius = radius;
  celestialBody.style.boxShadow = shadow;
  celestialBody.innerHTML = '&nbsp;';
  return celestialBody;
}
