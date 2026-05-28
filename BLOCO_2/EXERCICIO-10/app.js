const notas = [8.5, 4.0, 7.0, 5.5, 9.5, 6.0, 3.0, 7.5];

let aprov = [];
let reprov = [];
let cont1 = 0;
let cont2 = 0;

for(let i = 0; i < notas.length; i++)
{
    if(notas[i] >= 7)
    {     
        aprov.push(notas[i]);
        cont1++;
    }else{
        reprov.push(notas[i]);
        cont2++;
    }
}

console.log(`Aprovados (${cont1}): ${aprov} `);
console.log(`Reprovados (${cont2}): ${reprov} `);