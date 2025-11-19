import  type  { FC } from 'react'
import { FaHeart } from 'react-icons/fa';
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { PiContactlessPayment } from "react-icons/pi";
import DOMPurify from 'dompurify';


interface Props {
	description:string;
}

const Foot:FC<Props> = ({description}) => {
  return (
	<div>
	  <div className="flex flex-col gap-2 text-white">
		<div className="flex gap-2">
			<button className="flex-1 footer-button">
				Add to Cart
			</button>

			<button className="footer-button">
				<FaHeart/>
			</button>
		</div>

		<button className="bg-my-blue footer-button">Buy Now</button>
	  </div>

	  <div>
		<h2 className="font-semibold mt-8 mb-2 text-3xl text-dark-grey">Product information</h2>
		<div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(description)}}></div>

	  </div>
	  <br />
	  <div>
		<h2>🗓️ Estimated Delivery Time: 1-3 working days</h2>
		<h2 className="flex flex-row gap-2 "><MdOutlineLocalShipping /> Delivery from 0 zł and free return</h2>
		<h2 className="flex flex-row gap-2 "><IoWalletOutline /> Payment and delivery methods</h2>
		<h2 className="flex flex-row gap-2 "><PiContactlessPayment />Buy now and pay in 30 days with PayPo</h2>
	  </div>
	</div>
  )
}

export default Foot;
