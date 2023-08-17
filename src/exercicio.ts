let valor: number = calculo(4, 30);

function calculo(a: number, b: number): number {
    return a * b;
}

console.log (valor);

const names: string[] = [];
names.push("Professores");

function dizOla(): void {
    console.log(`Olá ${names}`);
}


dizOla();