import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import ResponsiveDrawer from "../ResponsiveDrawer";

/**
 * Good reference for extending layout to take into account auth layout
 * https://codesandbox.io/s/react-reusable-layouts-yk5nk?from-embed=&file=/src/routes/Route.js:0-1227
 */
export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <ResponsiveDrawer>
          <Component {...props} />
        </ResponsiveDrawer>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.elementType.isRequired,
};
