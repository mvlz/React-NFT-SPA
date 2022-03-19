import { useFormik } from "formik";
import Input from "../../common/input/Input";
import * as Yup from "yup";
import { Iconly } from "react-iconly";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
};
const onSubmit = (values) => {
  console.log("login");
};
const validationSchema = Yup.object({
  username: Yup.string().required("Please Enter your USERNAME"),
  password: Yup.string().required("Please Enter your PASSWORD"),
});
const Login = () => {
  const [isHide, setIsHide] = useState(true);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const showPasswordHandler = () => {
    setIsHide(!isHide);
  };

  return (
    <div className="mainSection">
      <div className="formContainer">
        <div className="imgContainer">
          <img
            src="https://www.gpslink.co.uk/static/assets/img/login.png"
            alt=""
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="username" label="Username" />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type={isHide ? "password" : ""}
          >
            <button className="formIconBtn" onClick={showPasswordHandler}>
              <Iconly
                primaryColor="#ccc"
                set="light"
                name={isHide ? "Hide" : "Show"}
                className="formIcon"
              />
            </button>
          </Input>
          <button type="submit" className="submitBtn">
            Log in
          </button>
          <Link to={"/signup"} className="formlink">
            You don't have an account? Sign up.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
