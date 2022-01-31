export const item = (product) => {

  return `
    <li class="item" data-aos="fade-up">
      
  <div class="product__block js_product glass glass-m" id="${product.id}">
  
    <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      </div>
      <a href="product-page.html?id=${product.id}" class="product__link">product details
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 292.828 292.828" style="enable-background:new 0 0 292.828 292.828;" xml:space="preserve">
<g>
	<g>
		<polygon points="256.756,99.709 256.74,231.242 25.509,0 0,25.509 231.247,256.756 99.709,256.756 
			99.709,292.828 292.828,292.828 292.828,99.709 		"/>
	</g>
</g>
</svg></a>
  
    <button class="product__btn js_product__btn js_add-to-cart">
    <span>click to buy</span>
    <span>★</span>
     <span>click to buy</span>
     <span>★</span>
     <span>  </span>
  </button>
</div>

  </li>
    `
}


