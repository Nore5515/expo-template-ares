import HomeScene from "./scenes/homeScene"

const public = [
  { path: "/", exact: true, component: HomeScene }
]

const private = [
  { path: "/private-example", exact: true, component: HomeScene }
]

const routes = {
  public,
  private
}

export default routes;