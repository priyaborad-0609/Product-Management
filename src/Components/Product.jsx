import { useSelector, useDispatch } from "react-redux";


const Product = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Product List</h1>
        </div>
    )

}
export default Product;
