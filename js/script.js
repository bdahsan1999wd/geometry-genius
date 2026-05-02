
// =====================================
// NAVIGATION: Go to Blog Page
// =====================================
document.getElementById('blog-page').addEventListener('click', function () {
  // Redirect user to blog page
  window.location.href = 'blog.html';
});


// =====================================
// UI EFFECT: Random card background color on hover
// =====================================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {

  // When mouse enters card → change background color
  card.addEventListener('mouseover', function () {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    card.style.backgroundColor = randomColor;
  });

  // When mouse leaves → reset to default
  card.addEventListener('mouseout', function () {
    card.style.backgroundColor = 'white';
  });

});


// =====================================
// INPUT VALIDATION HELPER FUNCTION
// (Reusable validation logic)
// =====================================
function isValidNumber(...values) {
  return values.every(val => !isNaN(val) && val !== '');
}


// =====================================
// DISPLAY RESULT IN TABLE
// =====================================
let count = 1;

function disPlayData(cardName, totalResult) {

  const container = document.getElementById('table-container');

  const tr = document.createElement('tr');

  // Show result row in table
  tr.innerHTML = `
    <td>${count}</td>
    <td>${cardName}</td>
    <td>${totalResult} cm<sup>2</sup></td>
    <td>
      <button class="btn btn-success">
        Convert to m<sup>2</sup>
      </button>
    </td>
  `;

  count++;
  container.appendChild(tr);
}


// =====================================
// TRIANGLE CALCULATION
// Formula: 0.5 × base × height
// =====================================
document.getElementById('first-card').addEventListener('click', function () {

  const cardName = document.getElementById('triangle').innerText;

  const base = parseFloat(document.getElementById('triangle-field-b').value);
  const height = parseFloat(document.getElementById('triangle-field-h').value);

  // Input validation
  if (!isValidNumber(base, height)) {
    alert('Please enter valid numbers for Triangle');
    return;
  }

  const result = 0.5 * base * height;

  disPlayData(cardName, result);
});


// =====================================
// RECTANGLE CALCULATION
// Formula: width × length
// =====================================
document.getElementById('second-card').addEventListener('click', function () {

  const cardName = document.getElementById('rectangle').innerText;

  const width = parseFloat(document.getElementById('rectangle-field-w').value);
  const length = parseFloat(document.getElementById('rectangle-field-l').value);

  if (!isValidNumber(width, length)) {
    alert('Please enter valid numbers for Rectangle');
    return;
  }

  const result = width * length;

  disPlayData(cardName, result);
});


// =====================================
// PARALLELOGRAM CALCULATION
// Formula: base × height
// =====================================
document.getElementById('third-card').addEventListener('click', function () {

  const cardName = document.getElementById('parallelogram').innerText;

  // Clean numeric extraction (remove "cm")
  const base = parseFloat(document.getElementById('parallelogram-b').innerText);
  const height = parseFloat(document.getElementById('parallelogram-h').innerText);

  const result = base * height;

  disPlayData(cardName, result);
});


// =====================================
// RHOMBUS CALCULATION
// Formula: 0.5 × d1 × d2
// =====================================
document.getElementById('fourth-card').addEventListener('click', function () {

  const cardName = document.getElementById('rhombus').innerText;

  const d1 = parseFloat(document.getElementById('rhombus-field-d1').innerText);
  const d2 = parseFloat(document.getElementById('rhombus-field-d2').innerText);

  const result = 0.5 * d1 * d2;

  disPlayData(cardName, result);
});


// =====================================
// PENTAGON CALCULATION
// Formula: 0.5 × perimeter × apothem
// =====================================
document.getElementById('fifth-card').addEventListener('click', function () {

  const cardName = document.getElementById('pentagon').innerText;

  const p = parseFloat(document.getElementById('pentagon-p').innerText);
  const b = parseFloat(document.getElementById('pentagon-b').innerText);

  const result = 0.5 * p * b;

  disPlayData(cardName, result);
});


// =====================================
// ELLIPSE CALCULATION
// Formula: π × a × b
// =====================================
document.getElementById('sixth-card').addEventListener('click', function () {

  const cardName = document.getElementById('ellipse').innerText;

  const a = parseFloat(document.getElementById('ellipse-a').innerText);
  const b = parseFloat(document.getElementById('ellipse-b').innerText);

  // use of Math.PI
  const result = Math.PI * a * b;

  disPlayData(cardName, result.toFixed(2));
});