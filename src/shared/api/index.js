export const postApiRequest = async (endpoint, initProps) => {
  if (!endpoint) {
    throw "No endpoint given";
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      ...initProps,
    });

    const toJsn = await response?.json();

    return toJsn.data;
  } catch (e) {
    throw e;
  }
};
