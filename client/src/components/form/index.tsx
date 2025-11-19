import type { FC} from "react";
import type { IShoe, IShoeFormValues} from "../../types";
import { Field, Formik , Form as FormikFrom} from "formik";
import { inputArray } from "../../utils/constants";


interface Props {
  onSubmit: (values: IShoeFormValues) => void;
  data?:IShoe;
  isPending?:boolean;
}

const Form: FC<Props> = ({ onSubmit, data, isPending}) => {
  const handleSubmit = (values: IShoeFormValues) => {
    onSubmit(values);

  };

// initial data for Formik
const initialValues = {
    name: data?.name || "",
    price: data?.price || "",
    discount: data?.discount || "",
    color: data?.color || "",
    size: data?.size || "",
    description: data?.description || "",
    isNew: data?.isNew || false,
    gender: data?.gender || "",
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} >
      <FormikFrom className="flex flex-col gap-5">
        {inputArray.map((input) => (
			<input key={input.name} {...input}/>
		))}
		<div className="flex items-center gap-5">
			<div>
			<Field type="radio" name="gender" value="male" id="male"/>
			<label htmlFor="male">Men</label>
			</div>
			<div>
			<Field type="radio" name="gender" value="female" id="female"/>
			<label htmlFor="female">Women</label>
			</div>
		</div>
		<button 
    disabled={isPending}
    type="submit" 
    className="bg-my-blue py-1 px-4 rounded-md text-white transition hover:bg-my-blue/80 cursor-pointer">
      Send
    </button>
      </FormikFrom>
    </Formik>
  );
};

export default Form;
