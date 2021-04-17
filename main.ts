import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { DOMParser } from "prosemirror-model"
import { EditorView } from "prosemirror-view"

let state = EditorState.create({
	schema,
	docs: DOMParser.fromSchema(schema).parse(document.querySelector("#content"))
})
let view = new EditorView({ mount: document.querySelector("[editor] [contenteditable]") }, { state })