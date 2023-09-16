const toolbarOptions = {
   toolbar: [
      [{ 'font': [] }],
      [{ 'size': [ 'small', false, 'large', 'huge' ] }],  // custom dropdown
      [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [ 'blockquote', 'code-block' ],
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'align': [] }],
      [ 'link', 'image', 'video' ],
      [ 'clean' ],   
   ],
};

export default toolbarOptions;