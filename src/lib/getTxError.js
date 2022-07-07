export const getTxError = (rawError) => {
  const errorString = rawError
    .toString()
    .replace("Error: Internal JSON-RPC error.", "")
    .trim();

  if (IsJsonString(errorString)) {
    const error = JSON.parse(errorString);
    return error.message || rawError.message;
  }
  return rawError.message;
};

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
