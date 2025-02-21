import { useEffect } from "react";
// @ts-ignore
import NianceEditor from "niance-editor";
import Navbar from "./Navbar";
const Niance_Editor = () => {
  useEffect(() => {
    const loadEditor = async () => {
      try {
        console.log(NianceEditor);
        const editor = document.querySelector(".editor");

        if (editor) {
          NianceEditor.InitializeEditor(editor);
          NianceEditor.CreateEditor();
        }
      } catch (error) {
        console.error("Failed to load Niance Editor:", error);
      }
    };

    loadEditor();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="editor"
        contentEditable={true}
        style={{ minHeight: "300px", border: "1px solid #ddd", color: "green" }}
      />
    </>
  );
};

export default Niance_Editor;
