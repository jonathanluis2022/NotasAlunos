let alunos = 1;  // 
let nota = 0, soma = 0, media;

while (alunos <= 10) { // contagem de alunos for menor igual a 10 vai continuar aparecendo o pronpt

    nota = parseFloat(prompt("Informe a Nota Do Aluno " + alunos + "Alunos")); //vamos digitar a nota 
    while (nota < 0 || nota > 100) { //si o usuario colocar menor q zero ou maior que 100
        alert(" Nota Invalida / Informe uma nota entre 0  e 100 "); //nota invalida 
        nota = parseFloat(prompt("Informe a Nota Do Aluno " + alunos + "Alunos"));
    }

    soma += nota;
    alunos++
}
const notas = document.querySelector('.notas')
media = soma / 10; // a soma é as 10 notas que o  usuario digitou dividido por 10 alunos que o laço iterou
const p = document.createElement('p');
p.innerHTML = media;
notas.appendChild(p)