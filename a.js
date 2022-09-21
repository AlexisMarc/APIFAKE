var objeto = [
    {"nombre":"cajas", "valor": 0.3},
    {"nombre": "comida", "valor": 0.4},
    {"nombre": "cosas", "valor": 3.4}
 ];
 
 var order = objeto.sort(function(a, b){ 
         
           if (a.valor > b.valor) {
           return -1;
 
           }
         
     });
     
     console.log(order);