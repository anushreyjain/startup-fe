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
import { getFromProtected, postToProtected } from "../apis/protected.api";

const SlangDetailsModal = ({
  height = "max-h-[600px] md:max-h-fit",
  width = "min-w-screen",
  closeModal,
  options,
  editSlang,
  slangData,
  tabHandler,
  handleDeleteSlang,
  handleApproveSlang,
  ...property
}) => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const getValues = (slangData) => {
    return {
      title: slangData?.title || "",
      description: slangData?.description || "",
      origin: slangData?.additionalInfo?.[0] || "",
      region: slangData?.additionalInfo?.[1] || "",
    };
  };

  const formik = useFormik({
    initialValues: getValues(slangData),
    onSubmit: async (values) => {
      try {
        await sleep(500);
        let updatedSlangData = {
          title: values.title,
          description: values.description,
          additionalInfo: [],
        };

        if (values.origin) {
          updatedSlangData.additionalInfo.push(values.origin);
        }

        if (values.region) {
          updatedSlangData.additionalInfo.push(values.region);
        }

        if (editSlang) {
          console.log(updatedSlangData);
          const data = {
            _id: slangData._id,
            title: updatedSlangData.title,
            description: updatedSlangData.description,
            status: "approved",
          };
          await postToProtected({
            query: "updateSlang",
            fields: ["_id"],
            variables: { data: data },
          });
          await tabHandler("submission");
        } else {
          await postToProtected({
            query: "createSlang",
            fields: ["_id"],
            variables: { data: updatedSlangData },
          });
          await tabHandler("my-creativity");
        }
        closeModal();
      } catch (err) {
        console.log(err);
      }
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
              {editSlang ? "Edit a Slang" : " Add a slang"}
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
              <div className="mt-8 flex space-x-3">
                <Button
                  typeButton="submit"
                  variant="contained"
                  size={"default"}
                >
                  {editSlang ? "Approve" : "Submit"}
                </Button>
                {editSlang && (
                  <Button
                    variant="contained"
                    size={"default"}
                    onClick={() => handleDeleteSlang(slangData?._id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </Form>
          </FormikProvider>
        </div>
      </DialogBox>
    </div>
  );
};

export default SlangDetailsModal;
