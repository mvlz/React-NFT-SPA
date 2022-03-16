import { useFormik } from "formik";
import Input from "../../common/input/Input";
import * as Yup from "yup";
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
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Please Enter your password"),
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="username" label="Username" />
        <Input formik={formik} name="password" label="Password" />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confirmation"
        />
      </form>
    </div>
  );
};

export default Signup;
