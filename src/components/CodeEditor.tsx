import { useEffect } from "react";

const NianceEditor = () => {
  useEffect(() => {
    const loadEditor = async () => {
      try {
        const nianceEditor = await eval(
          `import('hhttps://cdn.jsdelivr.net/npm/niance-editor@1.0.1/dist/niance-editor.umd.min.js')`
        );

        console.log("Loaded Niance Editor:", nianceEditor);

        const { CreateEditor,InitializeEditor } = nianceEditor;
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

  return <div className="editor" style={{ minHeight: "300px", border: "1px solid #ddd" }} />;
};

export default NianceEditor;
