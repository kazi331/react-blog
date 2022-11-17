import { Link, RichTextEditor as RTE } from '@mantine/tiptap';
import { IconSourceCode } from '@tabler/icons';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { BubbleMenu, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { lowlight } from 'lowlight';
import WriteSidebar from '../comp/WriteSidebar';
import '../tiptapEditor.css';


const colors = [
  '#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14'
]

const TipTapEditor = () => {
  // const [value, setValue] = useState("")
  const editor = useEditor({
    extensions: [
      StarterKit, TextStyle, Color, Link, Underline,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: `<p>Post Content.</p>`
  })
  const jsondoc = editor?.getJSON();
  const htmldoc = editor?.getHTML();

  // console.log(jsondoc)
  console.log(htmldoc)

  return (
    <div className='container write'>
      <div className="content">
        <h3>Write new post</h3>
        <form>
          <input type="text" placeholder='Post Title' />
        </form>

        <RTE className="editor-style" editor={editor}>

          <RTE.Toolbar sticky stickyOffset={60}>
            {/* color picker popup */}

            <RTE.ControlsGroup>
              <RTE.Bold />
              <RTE.Italic />
              <RTE.Underline />
              <RTE.Strikethrough />
              <RTE.ClearFormatting />
              <RTE.Highlight />
              <RTE.Code />
              <RTE.CodeBlock icon={({ size }) => <IconSourceCode size={size} />} />
            </RTE.ControlsGroup>

            <RTE.ControlsGroup>
              <RTE.H1 />
              <RTE.H2 />
              <RTE.H3 />
              <RTE.H4 />
            </RTE.ControlsGroup>

            <RTE.ControlsGroup>
              <RTE.Blockquote />
              <RTE.Hr />
              <RTE.BulletList />
              <RTE.OrderedList />
              <RTE.Subscript />
              <RTE.Superscript />
            </RTE.ControlsGroup>

            <RTE.ControlsGroup>
              <RTE.Link />
              <RTE.Unlink />
            </RTE.ControlsGroup>

            <RTE.ControlsGroup>
              <RTE.AlignLeft />
              <RTE.AlignCenter />
              <RTE.AlignJustify />
              <RTE.AlignRight />
            </RTE.ControlsGroup>

            <RTE.ControlsGroup>
              <RTE.ColorPicker colors={colors} />
              <RTE.UnsetColor />
            </RTE.ControlsGroup>

          </RTE.Toolbar>
          {/* Bubble Menu  */}
          {editor &&
            <BubbleMenu editor={editor} >
              <RTE.ControlsGroup>
                <RTE.Color color="#F03E3E" />
                <RTE.Color color="#7048E8" />
                <RTE.Color color="#1098AD" />
                <RTE.Bold />
                <RTE.Italic />
                <RTE.Link />
              </RTE.ControlsGroup>
            </BubbleMenu>
          }
          <RTE.Content />
        </RTE>


      </div>
      <div className="write-menu">
        <WriteSidebar />
      </div>
    </div>
  )
}

export default TipTapEditor
