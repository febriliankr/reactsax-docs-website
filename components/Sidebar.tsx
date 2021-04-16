import React, { ReactElement } from "react";
import Link from "next/link";
interface Props {}

function Sidebar({}: Props): ReactElement {
  return (
    <div className="sidebar-container">
      <Link href="/components/button">Button</Link>
    </div>
  );
}

export default Sidebar;
