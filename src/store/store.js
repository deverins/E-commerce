import { create } from 'zustand';

const useStore = create((set) => ({
  products: [],
  cart: [],
  view: {},

  addProduct: (product) => set((state) => ({
    products: [...state.products, product],
  })),

  viewProduct: (product) => set(() => ({
    view: product,
  })),

  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
  })),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(product => product.id !== productId),
  })),

  clearCart: () => set({ cart: [] }),
}));

export default useStore;
