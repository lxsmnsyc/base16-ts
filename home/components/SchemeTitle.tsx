import { Base16Scheme } from "base16-ts";
import React from "react";
import Head from 'next/head';

interface SchemeTitleProps {
  scheme: Base16Scheme
}

export default function SchemeTitle({ scheme }: SchemeTitleProps) {
  return (
    <>
      <Head>
        <title>base16-ts {scheme.scheme}</title>
      </Head>
      <h1 className="scheme">base16-ts {scheme.scheme}</h1>
    </>
  );
}