import Setting from "./components/Setting";
import { Separator } from "./components/ui/separator";
import ToolbarItem from "./components/ToolbarItem";
import {
  Bold,
  CodeXml,
  Expand,
  Image,
  Italic,
  Link,
  Quote,
  Redo2,
  SeparatorHorizontal,
  SquareCode,
  Strikethrough,
  Table,
  TextSearch,
  Underline,
  Undo2,
} from "lucide-react";

// https://lucide.dev/icons/categories#text
const toolbarItems = [
  { Icon: Undo2, ariaLabel: "Undo" },
  { Icon: Redo2, ariaLabel: "Redo" },
  { Icon: Bold, ariaLabel: "Bold" },
  { Icon: Italic, ariaLabel: "Italic" },
  { Icon: Underline, ariaLabel: "Underline" },
  { Icon: Strikethrough, ariaLabel: "Strikethrough" },
  { Icon: Quote, ariaLabel: "Quote" },
  { Icon: Link, ariaLabel: "Link" },
  { Icon: CodeXml, ariaLabel: "InlineCode" },
  { Icon: SquareCode, ariaLabel: "SquareCode" },
  { Icon: Expand, ariaLabel: "Expand" },
  { Icon: TextSearch, ariaLabel: "Search" },
  { Icon: Image, ariaLabel: "Image" },
  { Icon: SeparatorHorizontal, ariaLabel: "Separator" },
  { Icon: Table, ariaLabel: "Table" },
];

function App() {
  return (
    <>
      <div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div></div>
          <div aria-label="Tool bar" className="flex items-center gap-1">
            {toolbarItems.map(({ Icon, ariaLabel }) => (
              <ToolbarItem Icon={Icon} aria-label={ariaLabel} key={ariaLabel} />
            ))}
          </div>
          <div className="justify-self-end">
            <Setting />
          </div>
        </div>
        <Separator />
        <div>main</div>
      </div>
    </>
  );
}

export default App;
