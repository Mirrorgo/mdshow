import { useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { INITIAL_CONTENT } from "./constants";

function RichText() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value] = useState<Descendant[]>(INITIAL_CONTENT);
  return (
    <div>
      {/* <Slate editor={editor} value={value} onChange={(opt) => setValue(opt)}> */}
      <Slate editor={editor} initialValue={value}>
        <Editable
          //   renderElement={renderElement}
          //   renderLeaf={renderLeaf}
          placeholder="markdown here"
          //   onKeyDown={onKeyDown}
        />
      </Slate>
    </div>
  );
}

export default RichText;
