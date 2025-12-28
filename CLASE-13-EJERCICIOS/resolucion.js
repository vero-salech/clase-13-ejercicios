const edades = [16, 18, 22, 23]

if (edades[0]>=18 && edades[1]>=8 && edades[2]>=18 && edades[3]>=18) {
    console.log("Todos son mayores")
} else{
    console.log("Hay menores de edad")
}


const producto = ["Queso", "Pan", "Manteca", "Jamón"]

if (producto[0]==="Pan" || producto[1]==="Pan" || producto[2]==="Pan" || producto[3]==="Pan"){ 
    console.log("Producto Disponible")
} else{
    console.log("Producto no Disponible")
}


let usuarios = 5

if (usuarios > 5){
    console.log("Sistema con alta demanda")
} else if (usuarios >= 1){
    console.log("Sistema activo")
}else {
    console.log("No hay usuarios")
}