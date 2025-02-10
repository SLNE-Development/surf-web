import {
    AdmonitionDirectiveDescriptor,
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    codeMirrorPlugin,
    CodeToggle,
    CreateLink,
    directivesPlugin,
    headingsPlugin,
    imagePlugin,
    InsertAdmonition,
    InsertCodeBlock,
    InsertImage,
    InsertTable,
    InsertThematicBreak,
    listsPlugin,
    ListsToggle,
    MDXEditor,
    MDXEditorMethods,
    quotePlugin,
    sandpackPlugin,
    StrikeThroughSupSubToggles,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useRef } from "react";

export function WysiwygEditor({
    markdown,
    setMarkdown,
}: {
    markdown: string;
    setMarkdown: (markdown: string) => void;
}) {
    const ref = useRef<MDXEditorMethods>(null);

    return (
        <div className="prose max-w-full">
            <MDXEditor
                ref={ref}
                markdown={markdown}
                onChange={setMarkdown}
                plugins={[
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    tablePlugin(),
                    thematicBreakPlugin(),
                    imagePlugin(),
                    sandpackPlugin(),
                    directivesPlugin({
                        directiveDescriptors: [AdmonitionDirectiveDescriptor],
                    }),
                    codeMirrorPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <BoldItalicUnderlineToggles />
                                <BlockTypeSelect />
                                <CodeToggle />
                                <CreateLink />
                                <InsertThematicBreak />
                                <InsertAdmonition />
                                <StrikeThroughSupSubToggles />
                                <InsertCodeBlock />
                                <InsertImage />
                                <InsertTable />
                                <ListsToggle />
                            </>
                        ),
                    }),
                ]}
            />
        </div>
    );
}
