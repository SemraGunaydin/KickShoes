import type  { FC } from 'react'
import Form from "../../components/form";
import type { IShoeFormValues } from "../../types";
import { useShoe, useUpdateShoe } from '../../service/shoe';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
const Edit:FC = () => {

	const {mutate,isPending:isUpdatePending} = useUpdateShoe();

	//product id for edit
	const {id} = useParams();

	// product info for edit
	const {data, isPending} = useShoe(id as string);

	//form sending fonction if is working or not 
	const onSubmit = (values:IShoeFormValues) => {
		mutate({id, data:values});
};

// loader component working till product loading
if(isPending) return <Loader/>

  return (
	<div className="max-w-[1000px] mx-auto" >
	 <h1 className="text-2xl font-semibold">Edit Product</h1>

	 <Form onSubmit={onSubmit} data={data} isPending={isUpdatePending}/>
	</div>
  )
}

export default Edit;
