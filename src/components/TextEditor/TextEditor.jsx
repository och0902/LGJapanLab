import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

   // 서버 사이드 렌더링 중에 로드하지 않음
const TextEditorDynamic = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = (props) => {
   return (
      <TextEditorDynamic {...props} />
   );
};
export default TextEditor;