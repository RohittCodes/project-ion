import React from "react";
import SnippetSearch from "../../components/explain-that-stuff/snippet-search";
import CodeExplainer from "../../components/explain-that-stuff/code-explainer";

const SnippetsSearch = () => {
  return (
    <div className="h-full w-full flex flex-col mx-2 my-2 gap-4">
      <SnippetSearch />
      <CodeExplainer />
    </div>
  );
};

export default SnippetsSearch;
