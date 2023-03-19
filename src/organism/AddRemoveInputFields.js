import { useState } from "react";
import IcomoonIcon from "../components/IcomoonIcon";
function AddRemoveInputField() {
  const [inputFields, setInputFields] = useState([
    {
      fullName: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        fullName: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="container">
      <div className="flex flex-col space-y-4">
        {inputFields.map((data, index) => {
          const { fullName } = data;
          return (
            <div className="flex space-x-4 items-center" key={index}>
              <div className="flex-grow ">
                <input
                  type="text"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={fullName}
                  name="fullName"
                  className="w-full px-4 text-sm md:text-base py-2 outline-none bg-black-secondary rounded border border-white
             focus:border-primary-900 placeholder:text-neutral-400"
                  placeholder="Enter example"
                />
              </div>

              <div className="">
                {inputFields.length === 1 && (
                  <button
                    className="py-2.5 px-3 bg-white flex justify-between items-center rounded"
                    onClick={addInputField}
                  >
                    <IcomoonIcon icon={"plus"} size="20" color={"#10AC84"} />
                  </button>
                )}
                {inputFields.length === 2 ? (
                  <button
                    className="py-2.5 px-3 bg-white flex justify-between items-center rounded"
                    onClick={removeInputFields}
                  >
                    <IcomoonIcon icon={"trash"} size="20" color={"#C0392B"} />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AddRemoveInputField;
