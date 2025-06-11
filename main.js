let arraySuper = [
    {titulo: "Zapatillas", marca: "adidas",         precio: "2500", stock: 20, img: "https://woker.vtexassets.com/arquivos/ids/451618-600-600?v=638494708581470000&width=600&height=600&aspect=true"},
    {titulo: "Campera Deportiva",       marca: "GDO",        precio: "1100", stock: 8,  img: "https://http2.mlstatic.com/D_NQ_NP_804767-MLA46522157430_062021-O.webp"},
    {titulo: "Buzo (Niña)",     marca: "FOR",       precio: "4200", stock: 3,  img: "https://img.ltwebstatic.com/images3_pi/2022/02/11/16445757649320024f241c05e918e4fb0cac903c7d_thumbnail_405x.webp"},
    {titulo: "Campera Deportiva",        marca: "GDO",         precio: "2300", stock: 4,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY4b-yg-tNG2RqGuq3yOf9RRtY0-EBYSnnw&s"},
    {titulo: "REMERA",      marca: "Gallo",         precio: "1800", stock: 9,  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhAY6BlqX_1mtRNdZ_p70Xwwoa8nIjyOgohWIf7wSj2nI9vH40hV1aJHMMvGk_0l3ocU&usqp=CAU"},
    {titulo: "Conjunto Deportivo",    marca: "La Serenisima", precio: "3040", stock: 12, img: "https://acdn-us.mitiendanube.com/stores/001/251/987/products/img_45481-15d86796c51efcec6516473501791125-1024-1024.jpg"},
    {titulo: "Conjunto (niño)",    marca: "Pepsi",         precio: "3500", stock: 16, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RQ2joJlMZnXue3XeB_LdaTIomzdytxqakWfodibJcNwb7xVgDfMHHtnOQAuvu4tQ-k&usqp=CAU"},]

for (producto in arraySuper){
    
    let nuevoEstilo = `
        color:black;
        background-color: white;
        margin: 15px;
        padding:10px 40px 20px 40px; 
        text-align: center;
        
    `;

    let thisProd = arraySuper[producto];
    product.innerHTML += `
        <div class="transaccion"style="${nuevoEstilo}">
            <h3>${thisProd.titulo}</h3>
            <p>${thisProd.marca}</p>
            <img src="${thisProd.img}" height="100px",width="auto">
            <p>$${thisProd.precio}</p>
            <p>Quedan ${thisProd.stock} unidades</p>
            <button class="botones">Agregar al carrito</button>
        </div>
    `;
}
let btnGeneral = document.getElementById("btn");
btnGeneral.addEventListener("click", function() {
    alert(`
        Su precio original es de 
        `)
});
