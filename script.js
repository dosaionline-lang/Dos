function checkCode() {
  const secret = "7777"; 
  const input = document.getElementById('passInput').value;
  
  if (input === secret) {
    document.getElementById('loginBlock').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
  } else {
    alert("Неверный код!");
  }
}

function goToPage() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('page3').style.display = 'flex';
}

function goBackFromPage3() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('mainContent').style.display = 'flex';
}

function goToChats() {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('pageChats').style.display = 'flex';
}

function goBackFromChats() {
  document.getElementById('pageChats').style.display = 'none';
  document.getElementById('mainContent').style.display = 'flex';
}

function sendToPage5() {
  const input = document.getElementById('messageInput');
  const output = document.getElementById('displayWord');
  output.innerText = input.value;
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page5').style.display = 'flex';
  input.value = "";
}

function goBack() {
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page3').style.display = 'flex';
}
