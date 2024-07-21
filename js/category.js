import { drawProduct } from './drawProduct.js'
import { fetchApi } from './fetchApi.js'
import { category, params } from './variable.js'

fetchApi('http://localhost:3000/category')
  .then((data) => {
    let htmls = data.map((item) => {
      return `<div class="category__item" category__click=${item}>
            ${item}
        </div>`
    })
    category.innerHTML = htmls.join('')
    const listcategory = document.querySelectorAll('#category .category__item')
    listcategory.forEach((item) => {
      item.addEventListener('click', () => {
        params.category = item.getAttribute('category__click')
        drawProduct()
      })
    })
  })
