import Loadable from 'react-loadable';
import Path from "../../../cofing/PublicPath";
const PATH_ROOT = Path.PATH_ROOT
console.log("PublicPath==", PATH_ROOT)
const AsyncHome = Loadable({
  loader: () => import('views/home'),
  loading: () => null,
});

const AsyncUser = Loadable({
  loader: () => import('views/user'),
  loading: () => null,
});

const routes = [{
  path: PATH_ROOT,
  exact: true,
  component: AsyncHome,
}, {
  path: PATH_ROOT + 'user',
  component: AsyncUser,
}];

export default routes;
