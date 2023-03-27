import { axiosInstance } from '../utils/axios.util';
import { getProcessedVariables } from '../utils/common.util'

export const getFromUser = async (options) => {
  try {
    const resolvers = {
      createUpdateUser: `createUpdateUser`,
      deleteUser: `deleteUser(${getProcessedVariables(options.variables)})`,
    };
  
    const response = await axiosInstance.post(
      '/user',
      {
        params: {
          query: `query Mutation {
              ${resolvers[options.query]} {
                ${options.fields.join(' ')}
              }
            }`,
          variables: {
            data: options.data
          }
        }
      }
    );
  
    if (response.data.errors) {
      return { error: response.data.errors[0].message }
    }
  
    return response.data.data[options.query];
  } catch (error) {
    return { error: 'Something went wrong!' }
  }
}
