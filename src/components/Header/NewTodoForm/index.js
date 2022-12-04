import { Formik, Form, Field } from "formik";
import React from "react";
import { useTodo } from "../../../contexts/TodoContext";
import validations from "./validations";

function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        console.log(values);
        addTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validations}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="text"
          name="text"
          autoComplete="off"
        />
      </Form>
    </Formik>
  );
}

export default NewTodoForm;
