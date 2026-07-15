import { useState } from "react";
import FloatingButton from "./components/FloatingButton";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingButton onClick={() => setIsOpen(!isOpen)} />

      <Sidebar isOpen={isOpen} />
    </>
  );
}