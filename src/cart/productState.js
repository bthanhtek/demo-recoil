import { atom } from "recoil";

export const productListState = atom({
    key: 'ProductList',
    default: [
        {
            id : 1,
            title : "con mèo",
            price : 500000
        },
        {
            id : 2,
            title : "con chó",
            price : 1000000
        },
        {
            id : 3,
            title : "con gà",
            price : 450000
        }
    ],
  });