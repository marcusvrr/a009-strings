const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//a) Remova o excesso de espaços no final da string;
const trimString = minhaString.trim();
console.log(trimString);
//b)exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(minhaString.length)
console.log(trimString.length)
//c) Substitua os traços `________` por “sticioso”.
console.log(trimString.replace("________","sticioso"))

/*metodo do danilo jose silva fazendo todos metodos e propriedades no mesmo console:
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString);
console.log(`A frase inicial tem ${minhaString.length} caracteres.`);

console.log(`A frase sem espaços desnecessários tem ${minhaString.trim().length} caracteres.`);

console.log(minhaString.replace("________", "sticioso"), `\nA nova frase tem ${minhaString.replace("________", "sticioso").trim().length} caracteres.`);*/