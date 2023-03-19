import Text from "../atoms/Text";
import Textarea from "../molecules/Textarea";
import Button from "../atoms/Button";
import DialogBox from "../components/DialogBox";
import InputWithLabel from "../molecules/InputWithLabel";
import Dropdown from "../molecules/Dropdown";
import AddRemoveInputField from "./AddRemoveInputFields";
import IcomoonIcon from "../components/IcomoonIcon";

const SlangDetailsModal = ({
  height = "max-h-[600px] md:max-h-fit",
  width = "min-w-screen",
  closeModal,
  options,
  ...property
}) => {
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

          <InputWithLabel
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
          </Button>
        </div>
      </DialogBox>
    </div>
  );
};

export default SlangDetailsModal;
