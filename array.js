function pularlinha() {
    document.write("<br>");
}

function h1nome(x, t, n, text) {
    var x = document.createElement(n);
    var t = document.createTextNode(text);
    x.appendChild(t);
    document.body.appendChild(x);
}
//CONCAT

pularlinha();
h1nome("x", "t", "H2", "Concat");


const arr1 = ["Pessoa1", " Pessoa2", " Pessoa3"];
const arr2 = [" Pessoa4", " Pessoa5"];

const arr3 = arr1.concat(arr2);

console.log(arr3);
document.write(arr3);

/*
Se tiver 3 arr, coloque: const arr4 = arr1.concat(arr2,arr3);
O metodo concat adiciona 2 ou mais arrays.
Não muda a estrutura deles e retorna um novo array
*/

//CONSTRUCTOR

pularlinha();

h1nome("x_construct", "t_construct", "H2", "Construct");

const fruits = ["Maca", "Banana", "Abacaxi", "Uva"];
let text = fruits.constructor;

console.log(text);
document.write(text);

//CopyWhithin

h1nome("x_copywhitin", "t_copywhitin", "H2", "CopyWhithin");

console.log(fruits.copyWithin(2, 0));
document.write(fruits.copyWithin(2, 0));
pularlinha();
console.log(fruits.copyWithin(2, 0, 2));
document.write(fruits.copyWithin(2, 0, 2));

//Entries

pularlinha();
h1nome("x_entries", "t_entries", "H2", "Entries");
const f = fruits.entries();

for (let x of f) {
    document.write(x + "<br>")
}

/* O método Entries() retorna o valor e o nome dos objetos do array
   Esse método não pode mudar o array original
*/

//Every
pularlinha();
h1nome("x_every", "t_every", "H2", "Every");
const idades = [50, 34, 32, 13, 33, 20];

document.write(idades.every(analisar));

function analisar(idade) {
    return idade > 18;
}

//Fill

pularlinha();
h1nome("x_fill", "t_fill", "H2", "Fill");

document.write(fruits.fill("Limao")) //Muda todos os elementos
pularlinha();
document.write(fruits.fill("banana", 2, 4)) //Muda os ultimos dois elementos

//Filter
pularlinha();
h1nome("x_filter", "t_filter", "H2", "Filter")
const result = idades.filter(Adulto);

function Adulto(idade) {
    return idade > 18;
}
//const idades = [50, 34, 32, 13, 33, 20];
document.write(result); //Só vai retornar os numeros maiores que 18

//Find

pularlinha();
h1nome("x_find", "t_find", "H2", "Find");

function analisar2(idade) {
    return idade > 18;
} //Metodo passa o primeiro elemento que passa na triagem

document.write(idades.find(analisar2)) //Por isso o 50 foi o resultado

//FindIndex()

pularlinha();
h1nome("x_findI", "t_findI", "H2", "FindIndex");

function analisar3(idade) {
    return idade > 18;
} //Metodo passa a POSIÇÃO do primeiro elemento que passa na triagem

document.write(idades.findIndex(analisar2)) //Por isso o 0 foi o resultado

//ForEach
pularlinha();
h1nome("x_forE", "t_forE", "H2", "ForEach");
let txt = "";

const fruits2 = ["Maca", "Banana", "Abacaxi", "Uva"];

fruits2.forEach(myfuncition);

function myfuncition(item, index) {
    txt += index + ": " + item + "<br>"
}

document.write(txt);

//From
pularlinha();
h1nome('x_from', "t_from", "H2", "From");
let txt2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const myArr = Array.from(txt2);

document.write(myArr)

//Includes

pularlinha();
h1nome("x_includes", "t_includes", "H2", "Includes");

document.write(fruits2.includes("Maca")); //Verifica se o item esstá no array
pularlinha();
document.write(fruits2.includes("Maca", 3)); //Verifica se o item está nessa posição

//IndexOF

pularlinha();
h1nome("x_IO", "t_OF", "H2", "IndexOF");

const fruits3 = ["Maca", "Uva", "Banana", "Abacaxi", "Uva"];

let Io = fruits2.indexOf("Uva");
let Io2 = fruits3.indexOf("Uva", 3);
document.write(Io); //Retorna a posição 
pularlinha();
document.write(Io2); //Retorna a posição de "Uva" mais próximo da posição 3

//isArray 
pularlinha();
h1nome("x_IA", "t_IA", "H2", "isArray");
let ia = Array.isArray(fruits2);
let ia2 = Array.isArray("NIKANSIANS");
document.write(ia); //Verifica se o o objeto é um array (true),caso contrario imprime 'false'
pularlinha();
document.write(ia2); //"False"

//Join

pularlinha();
h1nome("x_join", "t_join", "H2", "Join");

let join = fruits2.join(" and "); //Adiciona algum termo entre os valores
document.write(join);

//Keys 

pularlinha();
h1nome("x_Keys ", "t_Keys ", "H2", "Keys ");

const keys = Object.keys(fruits2);


let txt3 = "";
for (let x of keys) {
    txt3 += x + "<br>";
}

document.write(txt3);

//Length
pularlinha();
h1nome("x_length", "t_length", "H2", "Length");
let Length = fruits2.length; //Verifica quantos objetos tem no array
document.write(Length);
pularlinha();
document.write(fruits2) //Const Fruits2 antes
pularlinha();
let length2 = fruits2.length = 2;
document.write(fruits2); //Const Fruits2 depois

//LastIndexOf

pularlinha();
h1nome("x_LI", "t_LI", "H2", "LastIndex");

const fruits4 = ["Maca", "Uva", "Abacate", "Maca", "Abacaxi", "Maca"];

let li = fruits4.lastIndexOf("Maca"); //Marca o ultimo index da Maca
let li2 = fruits4.lastIndexOf("goiaba"); //Retorna -1 porque não foi encontrado nenhum valor
document.write(li);
pularlinha();
document.write(li2);

//Map

pularlinha();
h1nome("x_Map", "t_Map", "H2", "Map");

const raiz = [4, 9, 16, 25, 64, 100];
const newArray = raiz.map(Math.sqrt);
const newArray2 = raiz.map(myfunction2);

function myfunction2(num) {
    return num * 10;
}
document.write(newArray); //Calcula a raiz de todos os valores do array "Raiz"
pularlinha();
document.write(newArray2); //Mutiplica todos os valores de "Raiz" por 10

//Pop

pularlinha();
h1nome("x_Pop", "t_Pop", "H2", "Pop");
const popremove = ["A", "B", "C", "D", "E", "F"]
let pop = popremove.pop();
document.write(pop); //Removeu o ultimo termo "F" e o imprimiu
pularlinha();
popremove.pop();
document.write(popremove); //Removeu o ultimo termo e imprimou os que ficaram

//Prototype

pularlinha();
h1nome("x_prototype", "t_prototype", "H2", "Prototype");

//Adicionando um novo método
Array.prototype.Caps = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

//Aplicando o metodo no array
const fruits_caps = ["maçã", "pêra", "banana", "morango", "larnaja"];
fruits_caps.Caps();
document.write(fruits_caps);
//Esse exemplo foi de transformar os elementos do array em caps, porém podem ser feitos outros metodos para aplicar no array

//Push

pularlinha();
h1nome("x_Push", "t_Push", "H2", "Push");

fruits4.push("Morango"); //Adiciona novos elementos dentro do array
document.write(fruits4);
pularlinha();
fruits4.push("Manga", "Goiaba");
document.write(fruits4);

//Reduce
pularlinha();
h1nome("x_Reduce", "t_Reduce", "H2", "Reduce");

const numeros2 = [100, 24, 25];

document.write(numeros2.reduce(myfunction3));

function myfunction3(total, num2) {
    return total - num2;
}

pularlinha();

const numeros3 = [15.5, 1.1, 2.3, 4.7];

document.write(numeros3.reduce(soma, 0))

function soma(total, soma) {
    return total + Math.round(soma);
}

//ReduceRight

pularlinha();
h1nome("x_ReduceR", "t_ReduceR", "H2", "ReduceRight");

const numeros4 = [25, 20, 100];

document.write(numeros4.reduceRight(myfunction3));

pularlinha();
const numeros5 = [2, 50, 20, 150];

document.write(numeros5.reduceRight(soma));

//Reverse

pularlinha();
h1nome("x_Reverse", "t_Reverse", "H2", "Reverse");

document.write(fruits3);

fruits3.reverse();
pularlinha();
document.write(fruits3);

//Shift
pularlinha();
h1nome("x_Shift", "t_Shift", "H2", "Shift");

document.write(fruits3);

fruits3.shift(); //Retira o primeiro elemento do array

pularlinha();

document.write(fruits3);

//slice

pularlinha();
h1nome("x_slice", "t_slice", "H2", "Slice");

const fruits5 = ["Banana", "Maca", "Goiaba", "Uva", "Amora"];

const s = fruits5.slice(1, 3);

document.write(s);
pularlinha();

const s2 = fruits5.slice(-3, -1)

document.write(s2);

//some

pularlinha();
h1nome("x_some", "t_some", "H2", "Some");

document.write(idades.some(Adulto2));

function Adulto2(idade2) {
    return idade2 > 18;
}

//sort

pularlinha();
h1nome("x_sort", "t_sort", "H2", "Sort");

fruits5.sort(); //ordem alfabética

document.write(fruits5);
pularlinha();

fruits5.reverse(); //inverteu a ordem

document.write(fruits5);

//splice

pularlinha();
h1nome("x_splice", "t_splice", "H2", "Splice");

fruits5.splice(2, 0, "Limão", "Manga");

document.write(fruits5);
pularlinha();

fruits5.splice(3, 3);

document.write(fruits5);

//toString 

pularlinha();
h1nome("x_toString", "t_toString", "H2", "toString");

let txt5 = fruits5.toString();

document.write(txt5);

//Unshift

pularlinha();
h1nome("x_Unshift", "t_Unshift", "H2", "Unshift");

fruits5.unshift("Laranja", "Abacate")

document.write(fruits5);

//ValueOF

pularlinha();
h1nome("x_VOF", "t_VOF", "H2", "ValueOF")

const valueof = fruits5.valueOf();

document.write(valueof);