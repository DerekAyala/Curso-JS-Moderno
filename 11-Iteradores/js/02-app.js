for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Lo brinca");
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Aqui termina");
        break;
    }
    console.log(i);
}