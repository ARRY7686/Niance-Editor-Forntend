const CodeEditor = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 pt-[76px] md:pt-[82px]">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="rounded-xl bg-black/50 backdrop-blur-sm shadow-lg p-8">
          <div className="relative h-[700px]">
            <div
              contentEditable
              spellCheck={false}
              className="editor absolute inset-0 w-full border border-slate-700 rounded-lg bg-black p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent whitespace-pre-wrap break-words overflow-y-auto font-mono text-[15px] leading-relaxed text-slate-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
