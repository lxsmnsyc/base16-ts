import React from "react";
import Link from 'next/link';


export default function Footer(): JSX.Element {
  return (
    <footer>
      <span>
        MIT © <Link href="https://github.com/lxsmnsyc">lxsmnsyc</Link>
      </span>
      <span>
        <Link href="https://github.com/lxsmnsyc/base16-ts">Github</Link>
      </span>
    </footer>
  );
}