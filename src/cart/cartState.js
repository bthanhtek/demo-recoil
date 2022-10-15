import { atom, selector } from "recoil";

export const cartList = atom({
  key: "CartList",
  default: [],
});

export const totalPrice = selector({
  key: "total",
  get: ({ get }) => {
    const cart = get(cartList);

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});

export const addToCart = (cart, product) => {
  const isExitingItem = [...cart].find((item) => item.id === product.id);

  if (isExitingItem) {
    return [...cart].map((item) =>
      item.id === isExitingItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cart, { ...product, quantity: 1 }];
};

export const editItemToCart = (cart, product) => {
    const isExitingItem = [...cart].find((item) => item.id === product.id);

    if (isExitingItem) {
      return [...cart].map((item) =>
        item.id === isExitingItem.id
          ? product
          : item
      );
    }
}

export const removeItemToCart = (cart, product) => {
    const isExitingItem = [...cart].find((item) => item.id === product.id);
    if(isExitingItem){
        return [...cart].filter(item => item.id !== product.id)
    }
}