const alunos = [
    { nome: "Ana",    nota: 8.5 },
    { nome: "Bruno",  nota: 4.0 },
    { nome: "Carla",  nota: 7.0 },
    { nome: "Diego",  nota: 5.5 },
    { nome: "Elena",  nota: 9.5 },
    { nome: "Felipe", nota: 6.0 }
  ];

let maior = alunos[0];
let aprov = 0;
let media = 0;
let soma = 0;

for(let i = 0; i < alunos.length; i++)
{
    if(alunos[i].nota >= 7)
    {
        console.log(`${alunos[i].nome}: APROVADO`);
        aprov++;
    }
    else if(alunos[i].nota >= 5)
    {
        console.log(`${alunos[i].nome}: RECUPERAÇÃO`);
    }
    else
    {
        console.log(`${alunos[i].nome}: REPROVADO`);
    }

    soma += alunos[i].nota;


    if(alunos[i].nota > maior.nota)
    {
        maior = alunos[i];
    }
}

media = soma / alunos.length;

console.log(`\nMédia da Turma: ${media}`);
console.log(`Aluno com a maior nota: ${maior.nome} (${maior.nota})`);