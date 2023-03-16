import axios from "axios";
import { getProcessedVariables } from './common.util'

export const getFromPublic = async (options) => {
  const resolvers = {
    getEverything: `getEverything`,
    getSlang: `getSlang(${getProcessedVariables(options.variables)})`
  }
  const response = await axios({
    method: "GET",
    url: 'https://vast-cyan-hermit-crab-hat.cyclic.app/public', // TODO: Move to env vars later
    params: {
      query: `query Query {
        ${resolvers[options.query]} {
          ${options.fields.join(' ')}
        }
      }`,
      variables: options.variables
    },
    headers: {
      'Content-Type': 'application/json',
      'Apollo-Require-Preflight': 'true'
    }
  });

  if(response.data.errors) {
    return { error: response.data.errors[0].message }
  }

  return response.data.data[options.query];
}
