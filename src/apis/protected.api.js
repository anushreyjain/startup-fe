import axiosInstance from "../utils/axios.util";
import { getProcessedVariables } from "../utils/common.util";

export const getFromProtected = async (options) => {
  try {
    console.log(options);
    const resolvers = {
      deleteSlang: `deleteSlang(${getProcessedVariables(options.variables)})`,
      likeSlang: `likeSlang(${getProcessedVariables(options.variables)})`,
      bookmarkSlang: `bookmarkSlang(${getProcessedVariables(
        options.variables
      )})`,
      getSavedSlangs: `getSavedSlangs`,
      getUserSlangs: `getUserSlangs`,
      getSubmissions: `getSubmissions`,
    };
    const response = await axiosInstance.get("/protected", {
      params: {
        query: `query Query {
            ${resolvers[options.query]} {
              ${options.fields.join(" ")}
            }
          }`,
        variables: options.variables,
      },
    });

    if (response.data.errors) {
      return { error: response.data.errors[0].message };
    }

    return response.data.data[options.query];
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const postToProtected = async (options) => {
  try {
    const resolvers = {
      createSlang: `createSlang`,
      updateSlang: `updateSlang`,
    };
    const inputTypes = {
      createSlang: "CreateSlangInput",
      updateSlang: `UpdateSlangInput`,
    };
    const response = await axiosInstance.post("/protected", {
      query: `mutation Mutation($data:${inputTypes[options.query]}) {
          ${resolvers[options.query]}(data:$data) {
            ${options.fields.join(" ")}
          }
        }`,
      variables: options.variables,
    });

    if (response.data.errors) {
      return { error: response.data.errors[0].message };
    }
    return response.data.data[options.query];

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
