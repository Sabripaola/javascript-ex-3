var lista=["Rossi","Basilico","Colombo","Conti","Barbieri"];
var cognome=prompt("Inserire il cognome");

lista.push(cognome);
lista.sort();

var i=0;
var add=false;

while (!add && i < lista.lenght){
  if (lista[i] == cognome){
    add=true;
  }
  i++;
}

document.writeln(lista);

var num = lista.indexOf(cognome);
document.getElementById("utente").innerHTML=num;
