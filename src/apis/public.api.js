import { axiosInstance } from "../utils/axios.util";
import { getProcessedVariables } from '../utils/common.util'

export const getFromPublic = async (options) => {
  try {
    const resolvers = {
      getEverything: `getEverything`,
      getTrending: `getTrending`,
      getSlang: `getSlang(${getProcessedVariables(options.variables)})`
    }
    const response = await axiosInstance.get(
      '/public',
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
  } catch (error) {
    return { error: 'Something went wrong!' }
  }
}
