import { init, setRoute } from "serverifier";

const Init = (port = 3000, api = "/") => {
  const result = init(port, api);
  return restult;
};

const SetRoute = (
  api,
  data = "This is a simple route created using Serverifier!"
) => {
  const result = setRoute(api, data);
  return result;
};

const SharedModule = {
  Init,
  SetRoute,
};

export default SharedModule;
