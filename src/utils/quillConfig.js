import { Quill } from "react-quill";
import ReactDOMServer from "react-dom/server";
import CIcon from "@coreui/icons-react";

const icons = Quill.import("ui/icons");
icons.bold = ReactDOMServer.renderToString(<CIcon name="cil-bold" />);
icons.italic = ReactDOMServer.renderToString(<CIcon name="cil-italic" />);
icons.underline = ReactDOMServer.renderToString(<CIcon name="cil-underline" />);
icons.strike = ReactDOMServer.renderToString(<CIcon name="cil-text-strike" />);
icons.blockquote = ReactDOMServer.renderToString(<CIcon name="cil-double-quote-sans-left" />);
icons.list.ordered = ReactDOMServer.renderToString(<CIcon name="cil-list-numbered" />);
icons.list.bullet = ReactDOMServer.renderToString(<CIcon name="cil-list" />);
icons.indent["-1"] = ReactDOMServer.renderToString(<CIcon name="cil-indent-decrease" />);
icons.indent["+1"] = ReactDOMServer.renderToString(<CIcon name="cil-indent-increase" />);
icons.align[""] = ReactDOMServer.renderToString(<CIcon name="cil-align-left" />);
icons.align.center = ReactDOMServer.renderToString(<CIcon name="cil-align-center" />);
icons.align.right = ReactDOMServer.renderToString(<CIcon name="cil-align-right" />);
icons.align.justify = ReactDOMServer.renderToString(<CIcon name="cil-justify-left" />);
icons.link = ReactDOMServer.renderToString(<CIcon name="cil-link" />);
icons.image = ReactDOMServer.renderToString(<CIcon name="cil-image" />);
icons.video = ReactDOMServer.renderToString(<CIcon name="cil-video" />);
icons.color = ReactDOMServer.renderToString(<CIcon name="cil-color-border" />);
icons.background = ReactDOMServer.renderToString(<CIcon name="cil-color-fill" />);
icons.clean = ReactDOMServer.renderToString(<CIcon name="cilText" />);

const editor = {};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
editor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "color",
  "background",
];

export default editor;
