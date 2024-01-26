const Init = (port = 3000, api = "/") => {
  return { port, api };
};

const SetRoute = (
  api,
  data = "This is a simple route created using Serverifier!"
) => {
  return { api, data };
};

const SharedModule = {
  Init,
  SetRoute,
};

export default SharedModule;
