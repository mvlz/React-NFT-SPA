import "./Signup.css";
import { useFormik } from "formik";
import Input from "../../common/input/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  username: "",
  password: "",
  passwordConfirm: "",
};
const onSubmit = (values) => {
  console.log("hi");
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter your NAME"),
  username: Yup.string().required("Please Enter your USERNAME"),
  password: Yup.string()
    .required("Please Enter your PASSWORD")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
const Signup = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="mainSection">
      <div className="formContainer">
        <div className="imgContainer">
          <img
            src="https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="username" label="Username" />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            formik={formik}
            name="passwordConfirm"
            label="Password Confirmation"
            type="password"
          />
          <button type="submit" className="submitBtn">
            Sign Up
          </button>
          <Link to={"/login"} className="formlink">
            Already have account ? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
