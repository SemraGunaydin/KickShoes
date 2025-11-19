import type { ILoginValues, IRegisterValues } from "../types";

const initialLoginValues:ILoginValues = {
  email: "",
  password: "",
};

const initialRegisterValues:IRegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const numbers = [
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
];

export const colorsList = [
  { code: "#4A69E2", id: "blue" },
  { code: "#DC143C", id: "red" },
  { code: "#FFA52F", id: "yellow" },
  { code: "#232321", id: "black" },
  { code: "#234D41", id: "green" },
  { code: "#353336", id: "dark-gray" },
  { code: "#F08155", id: "orange" },
  { code: "#C9CCC6", id: "light-gray" },
  { code: "#677282", id: "gray" },
  { code: "#925513", id: "brown" },
  { code: "#BB8056", id: "light-brown" },
];
const inputArray = [
  {
    label: "Name",
    name: "name",
    type: "text",
  },
  {
    label: "Price",
    name: "price",
    type: "number",
  },
  {
    label: "Discount",
    name: "discount",
    type: "number",
  },
  {
    label: "Color",
    name: "color",
    type: "text",
  },
  {
    label: "Size",
    name: "size",
    type: "text",
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
  },
  {
    label: "New Product",
    name: "isNew",
    type: "checkbox",
  },
];








export { initialLoginValues, initialRegisterValues,inputArray };