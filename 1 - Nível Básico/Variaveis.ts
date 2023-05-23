{
    let a: string = 'Arthur';
    var b: boolean = true;
    const c: number = 1;

    {
        var d: [string, number, string, number];
        d = ['Arthur', 1, 'Lunkes', 2];
        let f: number = 2;

        console.log(f)
    }

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    // Let deixa a variavel a visivel apenas no escopo
    // console.log(f);
}

// Let deixa a variavel a visivel apenas no escopo
// console.log(a)

// var deixa a variavel b visivel em escopo global
console.log(b);
console.log(d);

// const deixa a constante c visivel apenas no escopo
// console.log(c)