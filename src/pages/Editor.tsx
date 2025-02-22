// @ts-ignore
import NianceEditor from "niance-editor";
import { useEffect } from "react";
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
    <div className="h-screen w-full bg-white/90 pt-[76px] md:pt-[82px]">
      <div
        contentEditable
        className="editor min-h-screen border border-gray-400 bg-inherit"
      />
    </div>
  );
}
