import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../app/cartSlice"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Your Cart
      </h1>

      {cartItems.length === 0 && (
        <p className="text-center text-gray-600">
          Your cart is empty.
        </p>
      )}

      {cartItems.map((product, index) => (
        <div
          key={`${product.id}-${index}`}
          className="bg-white rounded-lg shadow-md p-5 mb-4"
        >

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-32 h-32 object-cover rounded-md mb-4"
          />

          <h2 className="text-xl font-bold">
            {product.title}
          </h2>

          <p className="text-blue-600 font-bold mt-2">
            ${product.price}
          </p>

          <button
            onClick={() => dispatch(removeFromCart(product.id))}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Remove
          </button>

        </div>
      ))}

    </div>
  )
}

export default Cart