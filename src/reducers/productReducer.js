import ProductService from '../services/products'

const productReducer = (state=[], action) => {
    switch (action.type) {
      case 'INIT_PRODUCTS':
        return action.data
      case 'NEW_PRODUCT':
        return [...state, action.data]
      case 'TOGGLE_AVAILABILITY': {
        const id = action.data.id
        const productToChange = state.find(p => p.id === id)
        const changedProduct = {
          ...productToChange,
          availability: !productToChange.availability
        }
        return state.map(product => 
          product.id !== id ? product : changedProduct
        )
      }
      default:
        return state
    }
}


export const createProduct = (title, category) => {
  return async dispatch => {
    const newProduct = await ProductService.createNew(title, category)
    dispatch({
      type: 'NEW_PRODUCT',
      data: newProduct
    })
  }
}
  
export const toggleAvailabilityOf = (id) => {
    return {
      type: 'TOGGLE_AVAILABILITY',
      data: {id}
    }
}  

export const initializeProducts = () => {
  return async dispatch => {
    const products = await ProductService.getAll()
    dispatch({
      type: 'INIT_PRODUCTS', 
      data: products
    })
  }
}

export default productReducer