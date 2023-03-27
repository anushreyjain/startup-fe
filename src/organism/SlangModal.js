import Text from "../atoms/Text";
import Button from "../atoms/Button";
import DialogBox from "../components/DialogBox";
import Dropdown from "../molecules/Dropdown";
import AddRemoveInputField from "./AddRemoveInputFields";
import IcomoonIcon from "../components/IcomoonIcon";
import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";
import TextInput from "../molecules/TextInput";
import TextareaInput from "../molecules/TextareaInput";

const SlangDetailsModal = ({
  height = "max-h-[600px] md:max-h-fit",
  width = "min-w-screen",
  closeModal,
  options,
  ...property
}) => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      origin: "",
      region: "",
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Must be at least 5 characters")
        .required("Title is required")
        .matches(/^[a-zA-Z0-9]/, "Cannot contain special characters or spaces"),

      description: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Description is required")
        .matches(/^[a-zA-Z0-9]/, "Cannot contain special characters or spaces"),
    }),
  });
  return (
    <div className={`${property.className}`} {...property}>
      <DialogBox
        height={height}
        className=""
        closeModal={closeModal}
        isDisable={true}
        zIndex="z-50"
        width={"min-w-[50vw]"}
      >
        <div className="flex flex-col items-start space-y-6 md:space-y-8 w-full">
          <div className="flex justify-between w-full items-center">
            <Text
              fontFamily={"font-Josefin-Slab"}
              fontWeight="font-semibold"
              className="text-2xl md:text-3xl"
              variant=""
            >
              Add a slang
            </Text>
            <div className="cursor-pointer">
              <IcomoonIcon icon={"close"} size="30" onClick={closeModal} />
            </div>
          </div>

          <FormikProvider value={formik}>
            <Form className="w-full flex flex-col space-y-8">
              <TextInput
                label="Title"
                id="title"
                name="title"
                helpText="Must be 8-20 characters and cannot contain special characters."
                type="text"
                fontClass="text-secondary-900"
                placeholder="Enter slang title"
              />
              <div className="flex lg:flex-row flex-col w-full space-y-8 lg:space-x-10 lg:space-y-0 justify-between">
                <Dropdown
                  id="origin"
                  name="origin"
                  options={options}
                  labelText="Language Origin"
                  value={formik.values.origin}
                  onChange={(value) =>
                    formik.setFieldValue("origin", value.value)
                  }
                />
                <Dropdown
                  id="region"
                  name="region"
                  options={options}
                  labelText="Region it is used in"
                  value={formik.values.region}
                  onChange={(value) =>
                    formik.setFieldValue("region", value.value)
                  }
                />
              </div>
              <TextareaInput
                label="Meaning/Description"
                id="description"
                name="description"
                helpText="Must be 8-20 characters and cannot contain special characters."
                fontClass="text-secondary-900"
                placeholder="Enter slang description"
              />
              {/* <AddRemoveInputField id="example" name="example" /> */}
              <div className="mt-8">
                <Button
                  typeButton="submit"
                  variant="contained"
                  size={"default"}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </FormikProvider>

          {/* <InputWithLabel
            label={"Title"}
            type="text"
            placeholder={"Enter title"}
            fontColor="text-secondary-900"
          />

          <div className="w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
            <Dropdown options={options} labelText="Language Origin" />
            <Dropdown options={options} labelText="Region it is used in" />
          </div>
          <Textarea
            label={"Meaning/Description"}
            fontColor="text-secondary-900"
            placeholder={"Write the meaning/description of your slang"}
          />

          <div className="flex flex-col space-y-1 w-full">
            <Text
              variant="large"
              className={"text-secondary-900"}
              fontFamily={"font-Josefin-Slab"}
              fontWeight={"font-semibold"}
            >
              Example/Usage
            </Text>

            <AddRemoveInputField />
          </div>

          <Button type="contained" size={"default"}>
            Submit
          </Button> */}
        </div>
      </DialogBox>
    </div>
  );
};

export default SlangDetailsModal;
