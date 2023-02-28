import Badge from "../atoms/Badge";
import Text from "../atoms/Text";
import DialogBox from "../components/DialogBox";
import IcomoonIcon from "../components/IcomoonIcon";

const SlangDetailsModal = ({
  height = "max-h-[600px] md:max-h-fit",
  width = "min-w-screen",
  closeHandler,
  ratingMessage,
  handleCourseFeedback,
  handleSubmit,
  handleCourseFeedbackSubmit,
  saveCourseFeedback,
  watch,
  setValue,
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
      >
        <div className="flex flex-col items-start space-y-4 md:space-y-8">
          <div>
            <Text
              variant="large"
              className={"text-secondary-900"}
              fontWeight="font-semibold"
              fontFamily="font-Josefin-Slab"
            >
              Title
            </Text>
            <Text className={"text-black"}>
              This is a slang title, awdhaw hdi auwhduihwa iudh iauwhd uah
              diuhwa uidhaiu hdiu wah
            </Text>
          </div>
          <div>
            <Text
              variant="large"
              className={"text-secondary-900"}
              fontWeight="font-semibold"
              fontFamily="font-Josefin-Slab"
            >
              Meaning/Description
            </Text>
            <Text className={"text-black"}>
              This is a slang title, awdhaw hdi auwhduihwa iudh iauwhd uah
              diuhwa uidhaiu hdiu wah
            </Text>
          </div>
          <div>
            <Text
              variant="large"
              className={"text-secondary-900"}
              fontWeight="font-semibold"
              fontFamily="font-Josefin-Slab"
            >
              Usage/Example
            </Text>

            <ul className="list-disc list-inside text-black text-sm md:text-base">
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </li>
            </ul>   
          </div>

          <div>
            <Text
              variant="large"
              className={"text-secondary-900"}
              fontWeight="font-semibold"
              fontFamily="font-Josefin-Slab"
            >
              Additional Info
            </Text>
            <div className="flex items-center space-x-3  mt-1">
              <Badge>Delhi</Badge>
              <Badge>Hindi</Badge>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex space-x-1 items-end">
              <IcomoonIcon icon="thumb-up" size={"20"} />
              <Text variant="" className={"text-sm"}>
                123
              </Text>
            </div>
            <IcomoonIcon icon={"bookmark"} size="20" />
          </div>
        </div>
      </DialogBox>
    </div>
  );
};

export default SlangDetailsModal;
