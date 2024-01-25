let name = prompt ('Qual è il tuo nome');

let surname = prompt ('Qual è il tuo cognome?');

let color = prompt ('Qual è il tuo colore preferito?');

document.getElementById('name').innerHTML = name;

document.getElementById('surname').innerHTML = surname;

document.getElementById('favcolor').innerHTML = color;

document.getElementById('password').innerHTML = `${name}${surname}${color}MJ23`;