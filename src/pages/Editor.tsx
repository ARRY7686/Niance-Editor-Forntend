// @ts-ignore
import NianceEditor from "niance-editor";
import { useEffect } from "react";
import CodeEditor from "../components/CodeEditor";
export default function Editor() {
  useEffect(() => {
    const loadEditor = async () => {
      try {
        const { CreateEditor, InitializeEditor } = NianceEditor;
        const editor = document.querySelector(".editor");

        if (editor) {
          InitializeEditor(editor);
          CreateEditor();
        }
      } catch (error) {
        console.error("Failed to load Niance Editor:", error);
      }
    };

    loadEditor();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-black to-gray-900">
        <CodeEditor />
      </div>
    </>
  );
}
