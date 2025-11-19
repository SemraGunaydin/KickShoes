import type   { FC } from 'react'
import type { IShoe } from '../../types';
import { Link } from 'react-router-dom';
import Badge from './badge';
import Price from './price';


interface Props {
	shoe:IShoe;
}
const Card:FC<Props> = ({shoe}) => {

	console.log(shoe);

  return (
	<div className="flex flex-col justify-between">
	  <div>
		<div className="relative p-2 bg-white rounded-2xl xl:rounded-3xl">
			<Badge shoe={shoe}/>

			<img src={shoe.picture[0]} alt={shoe.name}
			className="rounded-xl xl:rounded-3xl" />
		</div>

		<h2 className="font-semibold line-clamp-2 my-4 lg:text-[20px] xl:text-[24px]">{shoe.name}
		</h2>
	  </div>
	  <Link to={`/shoe/${shoe._id}`}
        className="bg-dark-grey text-white font-medium px-4 py-2 rounded-2px transition hover:bg-black text-center flex items-center justify-center gap-1">
	  Detail -
	  <Price shoe={shoe}/>
	  </Link>
	</div>
  )
}

export default Card;
