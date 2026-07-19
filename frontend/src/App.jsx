import { useState, useEffect } from "react";
import FloatingButton from "./components/FloatingButton";
import Sidebar from "./components/Sidebar";
import { getFieldInformation } from "./services/api";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const [assistantEnabled, setAssistantEnabled] = useState(false);

  const [fieldData, setFieldData] = useState(null);

  useEffect(() => {

    const listener = async (event) => {

      if (!assistantEnabled)
        return;

      console.log("Selected Field:", event.detail);

      const result = await getFieldInformation(
        event.detail.name
      );

      if (result) {

        setFieldData(result);

        setIsOpen(true);

      }

    };

    window.addEventListener(
      "field-selected",
      listener
    );

    return () => {

      window.removeEventListener(
        "field-selected",
        listener
      );

    };

  }, [assistantEnabled]);

  return (

    <>

      <FloatingButton
        setIsOpen={setIsOpen}
      />

      <Sidebar

        isOpen={isOpen}

        setIsOpen={setIsOpen}

        assistantEnabled={assistantEnabled}

        setAssistantEnabled={setAssistantEnabled}

        fieldData={fieldData}

      />

    </>

  );

}

export default App;