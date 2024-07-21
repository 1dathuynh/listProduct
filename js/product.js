import { drawProduct } from './drawProduct.js'
import { input, pagiNext, pagiNum, pagiPre, params, search, select1 } from './variable.js'

drawProduct()
search.addEventListener('click', () => {
  params.q = input.value
  drawProduct()
})
input.addEventListener('keydown', (events) => {
  if (events.key === 'Enter') {
    params.q = input.value
    drawProduct()
  }
})
select1.addEventListener('change', (events) => {
  switch (events.target.value) {
    case 'macdinh':
      drawProduct()
      break
    case 'tangdan':
      params.sort = 'price'
      drawProduct()
      break
    case 'giamdan':
      params.sort = 'price'
      params.order = 'desc'
      drawProduct()
      break
    case 'giamgia':
      params.sort = 'discountPercentage'
      drawProduct()
      break
    default:
      break
  }
})

// pagination

pagiPre.addEventListener('click', () => {
  if (params.page > 1) {
    params.page = params.page - 1
    drawProduct()
    pagiNum.innerHTML = params.page
  }
})
pagiNext.addEventListener('click', () => {
  params.page = params.page + 1
  drawProduct()
  pagiNum.innerHTML = params.page
})
