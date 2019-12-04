import React from "react";

import { childrenWithProps } from "../utils/ReactUtils";

export default props => (
  <div>
    <h1>Familia</h1>
    <div>
      {/* {React.cloneElement(props.children, { ...props })} */}
      {childrenWithProps(props.children, props)}
    </div>
  </div>
);
