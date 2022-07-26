const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//a) Remova o excesso de espaços no final da string;
const trimString = minhaString.trim();
console.log(trimString);
//b)exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(minhaString.length)
console.log(trimString.length)
//c) Substitua os traços `________` por “sticioso”.
console.log(trimString.replace("________","sticioso"))