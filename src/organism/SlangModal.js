import Text from "../atoms/Text";
import Textarea from "../molecules/Textarea";
import Button from "../atoms/Button";
import DialogBox from "../components/DialogBox";
import InputWithLabel from "../molecules/InputWithLabel";
import Dropdown from "../molecules/Dropdown";

const SlangDetailsModal = ({
  height = "max-h-[600px] md:max-h-fit",
  width = "min-w-screen",
  closeHandler,
  options,
  ...property
}) => {
  return (
    <div className={`${property.className}`} {...property}>
      <DialogBox
        height={height}
        className=""
        close={closeHandler}
        isDisable={true}
        zIndex="z-50"
        width={"min-w-[50vw]"}
      >
        <div className="flex flex-col items-start space-y-6 md:space-y-8 w-full">
          <Text
            fontFamily={"font-Josefin-Slab"}
            fontWeight="font-semibold"
            className="text-2xl md:text-3xl"
            variant=""
          >
            Add a slang
          </Text>

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

          <Textarea
            label={"Example/Usage"}
            fontColor="text-secondary-900"
            placeholder={"Write the example/usage of your slang"}
          />

          <Button type="contained" size={"default"}>
            Submit
          </Button>
        </div>
      </DialogBox>
    </div>
  );
};

export default SlangDetailsModal;
