import { PATH } from './const.js'
import { fetchApi } from './fetchApi.js'
import { params } from './variable.js'

const product = document.querySelector('#products')

export const drawProduct = () => {
  let category = ''
  if (params.category !== '') {
    category = `&category=${params.category}`
  }
  let url = `${PATH}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`
  fetchApi(url)
    .then((data) => {
      let htmls = data.map((item) => {
        return `<div class="product__item">
                <div class="product__image">
                    <img src="${item.thumbnail}" alt="${item.title}">
                </div>
                <div class="product__percent">${item.discountPercentage}</div>
                <div class="product__content">
                    <div class="product__title">${item.title}</div>
                    <div class="product__meta">
                        <div class="product__price">${item.price}$</div>
                        <div class="product__stock">${item.stock}</div>
                    </div>
                </div>
    
            </div>`
      })
      product.innerHTML = htmls.join('')
    })
}
