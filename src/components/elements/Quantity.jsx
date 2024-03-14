import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Quantity ({cart, setCart, product}) {

    function findProduct() {
        const id = product.id;
        const index = cart.findIndex((product) => product.id === id);
        return index;
    }

    function handleDecrement() {
        const index = findProduct();
        if (index !== -1) {
            setCart((prevCart) => [...prevCart, [index].quantity-- ])
        }
    }

    function handleIncrement() {
        const index = findProduct();
        console.log('starting quantity: ' + cart[index].quantity)
        if (index !== -1) {
            setCart((prevCart) => {
                const newCart = prevCart.map((product, productIndex) => {
                    if (productIndex === index) {
                        return {
                            ...product,
                            quantity: cart[index].quantity+1
                        }
                    } else {
                        return product
                    }
                })
                return newCart;
            })
        }
        console.log('ending quantity: ' + cart[index].quantity)
    }

    return (
        <div className="border-2 border-slate-400 rounded-full flex gap-2 items-center mt-2 px-2 w-44">
            <div className="bg-slate-400 rounded-full w-8 h-8 text-2xl flex justify-center items-center p-2 hover:cursor-pointer"
                onClick={handleDecrement}
            >
                <RemoveIcon fontSize='small'/>
            </div>
            <input type="number" value={product.quantity} readOnly className="text-center focus:outline-none rounded-full remove-arrow w-full text-lg" />
            <div className="bg-slate-400 rounded-full w-8 h-8 text-2xl flex justify-center items-center p-2 hover:cursor-pointer"
                onClick={handleIncrement}
            >
                <AddIcon fontSize='small'/>
            </div>
        </div>
    )
}

Quantity.propTypes = {
    cart: PropTypes.array,
    setCart: PropTypes.func,
    product: PropTypes.object,
}