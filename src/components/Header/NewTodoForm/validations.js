import * as Yup from "yup";

const validations = Yup.object().shape({
  text: Yup.string().required("Test is a required field"),
});

export default validations;
