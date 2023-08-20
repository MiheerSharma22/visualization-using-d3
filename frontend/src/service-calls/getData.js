const URL = process.env.REACT_APP_BASE_URL;

const getData = async () => {
  const response = await fetch(`${URL}/getData`, {
    method: "GET",
  });
  return response;
};

export default getData;
