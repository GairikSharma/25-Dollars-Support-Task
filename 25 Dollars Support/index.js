var btninc = document.getElementsByClassName("quantityinc")[0]
var btndec = document.getElementsByClassName("quantitydec")[0]
// var quantity = document.getElementsByClassName("quantity")[0]
var count = 3
const inc = () => {
    count = count + 1
    document.getElementById("quantity").innerHTML = count
}

const dec = () => {
    count = count - 1
    document.getElementById("quantity").innerHTML = count
}

