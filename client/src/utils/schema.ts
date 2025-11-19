import * as Yup from "yup";

// şifre en az 1 büyük harf, 1 küçük harf, 1 sayı ve 1 özel karakter içermelidir.
const passwordRegex = new RegExp(
	"^(?=.*[!@#$%^&*()_+\\-=\\[\\]{};'\":\\\\|,.<>\\/?])(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$"
  );
  
  //  ad ve soyad alanında sadece alfabetik karakterler ve boşluk içerebilir
const nameRegex = /^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/;

const LoginSchema = Yup.object().shape({
	email:Yup.string().email("invalid email").required("Email is required"),
	password:Yup.string().required("Password is required")
});

const registerSchema = Yup.object().shape({
	firstName: Yup.string()
    .required("First name is required")
    .matches(nameRegex, "Invalid first name"),
  lastName: Yup.string()
    .required("Last name is required")
    .matches(nameRegex, "Invalid last name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(passwordRegex, "Password is not strong enough"),
});


export {LoginSchema, registerSchema};