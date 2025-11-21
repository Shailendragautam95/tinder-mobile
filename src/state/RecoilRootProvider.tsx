import React from "react";
import { RecoilRoot } from "recoil";

export default function RecoilRootProvider({ children }: any) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
