document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const number = '916360246299';
  const name = document.getElementById('name').value;
  const guests = document.getElementById('guests').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value || 'Table booking';

  const text = `Hello Club Aura!%0A%0AName: ${encodeURIComponent(name)}%0AGuests: ${encodeURIComponent(guests)}%0ADate: ${encodeURIComponent(date)}%0ARequest: ${encodeURIComponent(message)}`;

  window.open(`https://wa.me/${number}?text=${text}`, '_blank');
});


// DANDIYA NIGHTS COUNTDOWN
const eventDate = new Date('2026-09-17T15:00:00+05:30').getTime();

function updateCountdown() {
  const countdown = document.getElementById('countdown');
  if (!countdown) return;

  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    countdown.innerHTML = '<strong>DANDIYA NIGHTS IS LIVE! 🪩</strong>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div class="countdown-title">DANDIYA NIGHTS STARTS IN</div>
    <div class="countdown-numbers">
      <span>${days}<small>DAYS</small></span>
      <span>${hours}<small>HRS</small></span>
      <span>${minutes}<small>MIN</small></span>
      <span>${seconds}<small>SEC</small></span>
    </div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
