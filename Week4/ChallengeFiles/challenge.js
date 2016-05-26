// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
var planet = document.createElement('div');
planet.className = 'planet';
planet.style.backgroundColor = '#00519b';
planet.style.width = '100px';
planet.style.height = '100px';
planet.style.display = 'inline-block';
planet.style.borderRadius = '200px';
planet.innerHTML = '&nbsp;';
planet.style.boxShadow = '-10px -10px 45px rgba(0,0,0,0.55) inset';
document.body.appendChild(planet);

// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
var moon = document.createElement('moon');
moon.className = 'moon';
moon.style.backgroundColor = 'yellow';
moon.style.width = '50px';
moon.style.height = '50px';
moon.style.display = 'inline-block';
moon.style.borderRadius = '40px';
moon.style.boxShadow = '10px 10px 6px rgba(0,0,0,0.5),8px 8px 3px rgba(0,0,0,0.5), -5px -5px 10px rgba(0,0,0,0.45) inset';
moon.innerHTML = '&nbsp;';
document.getElementsByClassName('planet')[0].appendChild(moon);