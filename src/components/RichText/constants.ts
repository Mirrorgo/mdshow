// import { BaseElement, Descendant } from "slate";

enum ELEMENT_TYPE {
  CodeBlock = "code",
  QuoteBlock = "quote-block",
  BulletedList = "bulleted-list",
  H1 = "heading-one",
  H2 = "heading-two",
  H3 = "heading-three",
  H4 = "heading-four",
  H5 = "heading-five",
  H6 = "heading-six",
  ListItem = "list-item",
  Image = "image",
  Paragraph = "paragraph",
}

enum LEAF_TYPE {
  bold = "bold",
  code = "code",
  italic = "italic",
  underline = "underline",
}

// 扩展 BaseElement 类型，添加 'type' 属性
// interface CustomElement extends BaseElement {
//   type: "paragraph" | "heading"; // 根据需要定义不同类型的节点
//   children: Descendant[];
// }

// const INITIAL_CONTENT: CustomElement[] = [
//   {
//     type: "paragraph",
//     children: [{ text: "A line of text in a paragraph." }],
//   },
// ];

const INITIAL_CONTENT = [
  {
    type: ELEMENT_TYPE.H1,
    children: [{ text: "Heading 1" }],
  },
  {
    type: ELEMENT_TYPE.H2,
    children: [{ text: "Heading 2" }],
  },
  {
    type: ELEMENT_TYPE.H3,
    children: [{ text: "Heading 3" }],
  },
  {
    type: ELEMENT_TYPE.H4,
    children: [{ text: "Heading 4" }],
  },
  {
    type: ELEMENT_TYPE.H5,
    children: [{ text: "Heading 5" }],
  },
  {
    type: ELEMENT_TYPE.H6,
    children: [{ text: "Heading 6" }],
  },
  {
    type: ELEMENT_TYPE.Paragraph,
    children: [
      { text: "Hello World! test my slatejs" },
      { text: "Bold text.", bold: true, code: true },
      { text: "Italic text.", italic: true },
      { text: "Bold and underlined text.", bold: true, underline: true },
      { text: "support pwa?", code: true },
    ],
  },
];

export { ELEMENT_TYPE, INITIAL_CONTENT, LEAF_TYPE };
// export type { CustomElement };
