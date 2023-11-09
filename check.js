const fetch = require("node-fetch");

exports.check = (blocks, token) => {
    let arrayOrdenado = [blocks.data[0]];
    for (let j=0; j<=blocks.data.length-1; j++) {
        for (let i=0; i<=blocks.data.length-1; i++) {
            const data = {
                "blocks": [blocks.data[j], blocks.data[j+i]]
            };
            fetch(`https://rooftop-career-switch.herokuapp.com/check?token=${token}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.message) { 
                        // console.log(blocks.data[i+1], i+1);
                        arrayOrdenado.push(blocks.data[i+1]);
                        console.log(arrayOrdenado);
                        i = blocks.data.length;
                        j = i + 1;
                    } else {
                        // console.log("false", i+1);
                    }
                });
        }
    } 
    // return arrayOrdenado;
}