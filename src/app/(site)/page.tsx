import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Demo",
  description: "This is Home for Demo",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
