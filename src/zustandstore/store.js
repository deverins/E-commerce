import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  cart: [],
  view: {},

  addProduct: (product) => set((state) =>{
    return {products: [...state.products, product]}
  }),

  viewProduct: (product) => set(() => ({
    view: product,  
  })),

  addToCart: (product) => set((state) => {
    const isAlreadyInCart = state.cart.some(cartItem => cartItem.id === product.id);
    if (!isAlreadyInCart) {
      return { cart: [...state.cart, product] };
    }
    return state;
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(product => product.id !== productId),
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useStore;
