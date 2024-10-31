exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from DM!",
    }),
  };
};

// open link EndPoint :- https://cfvnsjkej8.execute-api.us-east-1.amazonaws.com/