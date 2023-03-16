export const getProcessedVariables = (variables) => {
  return JSON
    .stringify(variables)
    .replace(/[{}]/g, '')
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/\uFFFF/g, '\\\"');
}