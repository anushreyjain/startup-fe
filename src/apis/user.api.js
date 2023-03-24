import  { axiosInstance } from '../utils/axios.util';
import { getProcessedVariables } from '../utils/common.util'

// export const getFromUser = async (options) => {
//   const resolvers = {
//     getEverything: `getEverything`,
//     getSlang: `getSlang(${getProcessedVariables(options.variables)})`
//   }
//   const response = await axiosInstance.get(
//     '/protected',
//     {
//       params: {
//         query: `query Query {
//           ${resolvers[options.query]} {
//             ${options.fields.join(' ')}
//           }
//         }`,
//         variables: options.variables
//       }
//     }
//   );

//   if(response.data.errors) {
//     return { error: response.data.errors[0].message }
//   }

//   return response.data.data[options.query];
// };

export const postToUser = async (options) => {
  const resolvers = {
    getEverything: `getEverything`,
    getSlang: `getSlang(${getProcessedVariables(options.variables)})`
  };

  const response = await axiosInstance.post(
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
}
