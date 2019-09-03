import React from "react";

export default props => (
  <li className="treeview">
    <button>
      <i className={`fa fa-${props.icon}`} />
      <span>{props.label}</span>
      <i className="fa fa-angle-left pull-right" />
    </button>
    <ul className="treeview-menu">{props.children}</ul>
  </li>
);
