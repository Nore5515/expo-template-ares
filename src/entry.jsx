import { View } from "react-native";
import { Navigate, Outlet, Route } from "react-router-native";
import routes from "./routes";

// ASSETS
import Styles from "./styles/styles";

const Entry = () => {
  // TODO: Change this to check actual user
  const user = true;

  /**
   * If the current user is null, revert to login.
   */
  const RetrieveElement = () => {
    return user ? <Outlet /> : <Navigate to={"/login"} />;
  };

  return (
    <View style={Styles.container}>
      {/* ROUTES */}
      {[routes.public, routes.private].map((rts, idx) => {
        rts.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            /* idx: 0 = Public (false), 1 = Private (true) */
            element={idx ? <RetrieveElement /> : <Outlet />}
          >
            <Route
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          </Route>
        ));
      })}
    </View>
  );
};

export default Entry;
