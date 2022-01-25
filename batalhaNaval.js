const inp = require('prompt-sync')({sigint: true})

let table = [
    [0,0,0,1,0],
    [0,0,0,0,0],
    [0,0,1,1,1],
    [0,0,0,0,0]
]
let status = true
while (status == true){
    let rowMove = inp('row: ')
    let colMove = inp('column: ')
    let flag = 0

    if (table[rowMove][colMove] == 1) {
        table[rowMove][colMove] = 0
        for (i in table) {
            console.log(table[i])
        }
        console.log('acertou')
    }
    else {
        for (i in table) {
            console.log(table[i])
        }
        console.log('errou')
    }
    for (i = 0;i<table.length;i++){
        for (j=0;j<table[i].length;j++){
            if (table[i][j]==1){
                flag = 1
            }
        }
    }
    if (flag == 0){
        console.log("ganhou")
        status = false
    }
}