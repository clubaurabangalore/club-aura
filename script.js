document.getElementById('form').addEventListener('submit',function(e){
 e.preventDefault();
 // Replace this placeholder with Club Aura's WhatsApp number (country code + number, no + or spaces).
 const number='919999999999';
 const name=document.getElementById('name').value;
 const guests=document.getElementById('guests').value;
 const date=document.getElementById('date').value;
 const message=document.getElementById('message').value||'Table booking';
 const text=`Hello Club Aura!%0A%0AName: ${encodeURIComponent(name)}%0AGuests: ${encodeURIComponent(guests)}%0ADate: ${encodeURIComponent(date)}%0ARequest: ${encodeURIComponent(message)}`;
 window.open(`https://wa.me/${number}?text=${text}`,'_blank');
});