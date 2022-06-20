var entrada = ['zebra','cálice','borboleta']

function ordenaLista(lista, cont){
    let contador = cont;
    for(let j = contador; j<= lista.length; j++){
        for (let i = contador; i<=lista.length-j-1; i++){
            let palavra_1 = lista[i][0];
            let palavra_2 = lista[i+1][0];
            let compare = palavra_1.localeCompare(palavra_2) 
            if (compare>0){
                let temp = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = temp;                
            }
            else if (compare < 0){
                continue;
            }
            else{
                ordenaLista(lista, contador+1)
            }
        }
    }
    return lista 
    
}
saida = ordenaLista(entrada,0);
console.log(saida)

module.exports = ordenaLista;
