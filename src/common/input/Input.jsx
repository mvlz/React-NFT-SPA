import "./Input.css";
const Input = ({ label, name, formik, type = "text", children }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {children}
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
