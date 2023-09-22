import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  // offset navbar height
  return <section className="pt-20">{children}</section>;
}
