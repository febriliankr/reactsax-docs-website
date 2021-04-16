import React, { ReactElement } from "react";
import Link from "next/link";
interface Props {}

function Sidebar({}: Props): ReactElement {
  return (
    <div>
      <Link href="/components/button">Button</Link>
    </div>
  );
}

export default Sidebar;
