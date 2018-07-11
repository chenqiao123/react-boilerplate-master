import Path from "../../cofing/PublicPath";
const PublicPath = Path.PATH_ROOT
function login() {
  return {
    type: 'LOGIN',
    payload: true,
  };
}

export default {
  login, PublicPath
};
