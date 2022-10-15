import { useRecoilState, useRecoilValue } from "recoil"
import { addToCart, cartList } from "../cartState";
import { productListState } from "../productState";

export const ProductList = () => {

    const productList = useRecoilValue(productListState);
    const [cart, setCart] = useRecoilState(cartList);

    const handleAddToCart = (product) => {
        setCart(addToCart(cart, product))
    }

    return <>
        <h1>Product List</h1>
        <div className="List">
            <ul>
                {
                    productList.map(item =>  <li key={item.id}>{item.title} - {item.price} <button onClick={() => handleAddToCart(item)}>Thêm {item.title} vào giỏ hàng</button></li>  )
                }
            </ul>
        </div>
    </>
}