import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import {getBasketTotal} from "../reducer";


function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);

	const checkout = () => {
		if (basket.length !== 0) {
			alert("Purchase successful !");
			dispatch({
				type: "EMPTY_BASKET",
			});
		} else {
			alert("Please add at least 1 item to make a purchase");
		}
	};

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket) * 1.13}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button
				onClick={checkout}
			>
				Proceed to checkout
			</button>
		</div>
	);
}

export default Subtotal;
