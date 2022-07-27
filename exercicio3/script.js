//Crie a const para a frase aqui
//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase1 = frase.replace("verde","rosa");
const frase2 = frase1.replace("azul","laranja");
console.log(frase2)
//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(frase2.includes("verde","laranja"))
//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const frase3 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,';
const frase4 = 'mas não deixe o gato sair"'
console.log(frase3,frase4.toUpperCase())

/*solução da juliana
const frase5 = frase2,replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")*/

/*SOLUÇÃO RODRIGO MONITOR
const frase5 = frase2.replace("mas não deixe o gato sair", `${mas não deixe o gato sair.toUpperCase()}`) // não funcionou pra mim.
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`*/

console.log(frase2.replace("mas não deixe o gato sair", `${"mas não deixe o gato sair".toUpperCase()}`)) //essa funcionou pra mim.


