let arraySuper = [
    {titulo: "Zapatillas", marca: "Adidas",         precio: "2500", img: "https://woker.vtexassets.com/arquivos/ids/451618-600-600?v=638494708581470000&width=600&height=600&aspect=true"},
    {titulo: "Campera Deportiva",       marca: "GDO",        precio: "1100", img: "https://http2.mlstatic.com/D_NQ_NP_804767-MLA46522157430_062021-O.webp"},
    {titulo: "Buzo (Niña)",     marca: "FOR",       precio: "4200", img: "https://img.ltwebstatic.com/images3_pi/2022/02/11/16445757649320024f241c05e918e4fb0cac903c7d_thumbnail_405x.webp"},
    {titulo: "Campera Deportiva",        marca: "GDO",         precio: "2300",  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY4b-yg-tNG2RqGuq3yOf9RRtY0-EBYSnnw&s"},
    {titulo: "REMERA",      marca: "Nike",         precio: "1800",img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhAY6BlqX_1mtRNdZ_p70Xwwoa8nIjyOgohWIf7wSj2nI9vH40hV1aJHMMvGk_0l3ocU&usqp=CAU"},
    {titulo: "Conjunto Deportivo",    marca: "Puma", precio: "3040", img: "https://acdn-us.mitiendanube.com/stores/001/251/987/products/img_45481-15d86796c51efcec6516473501791125-1024-1024.jpg"},
    {titulo: "Conjunto (niño)",    marca: "GAP",         precio: "3500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3RQ2joJlMZnXue3XeB_LdaTIomzdytxqakWfodibJcNwb7xVgDfMHHtnOQAuvu4tQ-k&usqp=CAU"},]
    
    let carrito = [];
    let prodsIsRender = false // el interruptor en el catálogo no es importante
    let carritoIsRender = false // en el carrito sí.
    //__________________________________
    let displayProductos = document.getElementById("product");
    let displayCarrito = document.getElementById("preCompra");
    let btnCarrito = document.getElementById("btnCarrito");

    // Función para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
            const prodEncontrado = carrito.find((e) => e === producto);
                prodEncontrado == undefined
                    ? carrito.push(producto)
                    : prodEncontrado.cantidad += 1
                producto.stock -= 1
                /* para profundizar opcional, crear una lógica que no permita agregar más unidades de las que se tienen en stock */
                renderCarrito()
                renderListaSuper()
    }
    const Productos =  ()  =>{
        displayProductos.innerHTML = ""; // Limpio primero
        for (producto in arraySuper){
            let thisProd = arraySuper[producto];
            let nuevoEstilo = `
                color:black;
                background-color: white;
                margin: 15px;
                padding:10px 40px 20px 40px; 
                text-align: center;
                
            `;

            product.innerHTML += `
                <div class="transaccion"style="${nuevoEstilo}">
                    <h3>${thisProd.titulo}</h3>
                    <p>${thisProd.marca}</p>
                    <img src="${thisProd.img}" height="100px",width="auto">
                    <p>$${thisProd.precio}</p>
                    <button class="botones">Agregar al carrito</button>
                </div>
            `;
            btnAddCarrito.addEventListener("click", () => agregarAlCarrito(thisProd));
            product.appendChild(btnAddCarrito)
            displayProductos.appendChild(product)
        }
        prodsIsRender = true
    }
    const renderCarrito = () => {
        displayCarrito.innerHTML = ""; // Limpiar antes de renderizar{
        for (producto in carrito){
            let thisProd = carrito[producto];
            let nuevoEstilo = `
                color:black;
                background-color: white;
                margin: 15px;
                padding:10px 40px 20px 40px; 
                text-align: center;                    
            `;
            product.innerHTML += `
                <div class="transaccion"style="${nuevoEstilo}">
                    <h3>${thisProd.titulo}</h3>
                    <p>${thisProd.marca}</p>
                    <img src="${thisProd.img}" height="100px",width="auto">
                    <p>$${thisProd.precio}</p>
                    <button class="botones">Agregar al carrito</button>
                </div>
            `;
            displayCarrito.appendChild(product)
        }
        carritoIsRender = true
    }

    btnCarrito.addEventListener("click", renderCarrito);
    renderListaSuper();
