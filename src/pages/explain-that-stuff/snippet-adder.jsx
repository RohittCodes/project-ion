import CodeHolder from "../../components/explain-that-stuff/code-holder/code-holder";
import Codebox from "../../components/explain-that-stuff/codebox";
import MyContextProvider from "../../lib/context-provider";

const SnippetAdder = () => {
  return (
    <div className="flex w-screen max-h-[880px] h-full px-6 my-4 pb-4 gap-2">
      <MyContextProvider>
        <Codebox />
        <CodeHolder />
      </MyContextProvider>
    </div>
  );
};

export default SnippetAdder;
