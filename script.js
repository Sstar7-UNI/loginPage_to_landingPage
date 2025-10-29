const form=document.getElementById('loginForm');
const message=document.getElementById('message');

form.addEventListener('submit',function(event) 
{
  event.preventDefault();
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value;
  if (username==='admin'&&password==='1234') 
  {
    message.style.color='#2f855a';
    message.textContent='Login successful. Redirecting...';
    setTimeout(() => { window.location.href = 'landing.html';}, 1500);
  }else 
  {
    message.style.color='#c53030';
    message.textContent='Invalid username or password.';
  }
});

