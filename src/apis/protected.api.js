import  { axiosInstance } from '../utils/axios.util';
import { getProcessedVariables } from '../utils/common.util'

export const getFromProtected = async (options) => {
  const resolvers = {
    getEverything: `getEverything`,
    getSlang: `getSlang(${getProcessedVariables(options.variables)})`
  }
  const response = await axiosInstance.get(
    '/protected',
    {
      params: {
        query: `query Query {
          ${resolvers[options.query]} {
            ${options.fields.join(' ')}
          }
        }`,
        variables: options.variables
      }
    }
  );

  if(response.data.errors) {
    return { error: response.data.errors[0].message }
  }

  return response.data.data[options.query];
};

export const postToProtected = async (options) => {
  const resolvers = {
    getEverything: `getEverything`,
    getSlang: `getSlang(${getProcessedVariables(options.variables)})`
  };

  const response = await axiosInstance.post(
    '/protected',
    {
      params: {
        query: `mutation Mutation {
          ${resolvers[options.query]} {
            ${options.fields.join(' ')}
          }
        }`,
        variables: options.variables
      }
    }
  );

  if(response.data.errors) {
    return { error: response.data.errors[0].message }
  }

  return response.data.data[options.query];
}
