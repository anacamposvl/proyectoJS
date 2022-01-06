//declaración de variables
const featuredContainer = document.querySelector('.featured-container');
console.log(featuredContainer);

const url='../assets/data/products.json';



//declaro mis funciones

//Consume a través de fetch, mi archivo json con los productos y me devuelve un array de objetos productos
const getProducts = () =>{

    fetch(url)
        .then( resp => resp.json())
        .then( products => imprimirProductos(products));
}


const imprimirProductos = (arrayProductos) => {

    const featuredProducts = arrayProductos.filter( product => product.sale === true);
    console.log(featuredProducts); 

    featuredProducts.forEach( product => {

        let cardProduct = document.createElement('article');
        cardProduct.classList.add('card-product');
        cardProduct.innerHTML= `<div class="card-product__image">
                                    <img src=${product.image} alt="" />
                                </div>
                                <div class="card-product__detail">
                                    <h3 class="detail__name">${product.name}</h3>
                                    <p class="detail__description">Descripción del producto que se vende en la página web</p>
                                    <span class="detail__price">$${product.price}</span> 
                                    <span class="detail__review">⭐⭐⭐⭐⭐</span>
                                </div>`
        featuredContainer.appendChild(cardProduct);

    });
}





//declarar mis eventos




//ejecuciones inmediatas
getProducts();





// document.addEventListener('DOMContentLoaded' , () => {
//     getProducts();
//  }
//  )
