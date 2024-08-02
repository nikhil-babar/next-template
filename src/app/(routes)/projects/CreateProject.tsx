"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { createProjectSchema } from "./schema";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { createProjectAction } from "./actions";
import { toast } from "react-toastify";

export default function CreateProject() {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    handleReset,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values, helper) => {
      console.log("Form submitted: ", values);
      await createProjectAction(values);
      toast("Sucessfully created project!");
      helper.resetForm();
    },
    validationSchema: toFormikValidationSchema(createProjectSchema),
  });

  return (
    <>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Project title" />
          </div>
          <TextInput
            id="title"
            name="title"
            type="text"
            placeholder="project"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            onReset={handleReset}
            required
          />
          {errors.title && touched.title && (
            <span className="text-red-500">{errors.title}</span>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Project description" />
          </div>
          <Textarea
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            onReset={handleReset}
            required
          />
          {errors.description && touched.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
        </div>
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </form>
    </>
  );
}
