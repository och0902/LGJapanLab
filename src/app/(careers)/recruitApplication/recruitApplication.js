const jpn = {
   toasts: {
      error: [ 
         '必須項目を抜けずに入力してください。',
         'メールアドレスが一致しません。',
         'プライバシーポリシーに同意してください。',
         'データ処理中にエラーが発生しました。',
      ],
      message: [
         '入力したデータは正常に処理されました。',
      ],
   },
   page: {
      title: 'エントリーフォーム',
      desc: [ '表示された項目は必須です。', '※ ファイルはMicrosoft OfficeまたはPDF形式にし、ファイルサイズは合計100MB以内で作成いただきますようお願いいたします。' ]
   },
   items: [
      { title: '氏名', desc: '' },
      { title: 'フリガナ', desc: '' }, 
      { title: 'メールアドレス', desc: '' }, 
      { title: 'メールアドレス (確認用)', desc: '' }, 
      { title: '携帯電話', desc: `'-'なしの数字のみ` }, 
      { title: 'ポジション', desc: '' }, 
      { title: '履歴書および職務経歴書', desc: '' }, 
      { title: 'その他の記載事項', desc: '' }, 
   ],
   btn: [
      {
         desc: [ '', 'LG Japan Lab Inc. および LGグループの個人情報の取り扱いに', '同意いただける場合は以下の「同意する」をチェックしてください。', '同意する' ],
         modalAccept: 'プライバシーポリシーに同意する',
         modalClose: 'プライバシーポリシーを閉じる',
      },
      {
         title: [ 'Submit', 'Saving...' ],
         desc: '※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。',
      }
   ],
   etc: {
      required: '必須',
      select: '選択',
   },
};

const eng = {
   toasts: {
      error: [ 
         'Please enter all required items.',
         'Email address do not match.',
         'Please agree to the privacy policy.',
         'An error occurred during data processing.',
      ],
      message: [
         'The data you entered has been processed successfully.',
      ],
   },
   page: {
      title: 'Recruitment Application',
      desc: [ ' marked items are required.', '※ Please make a file in Microsoft Office or PDF format and make sure that the file size does not exceed 100MB in total.' ]
   },
   items: [
      { title: 'Name', desc: '' },
      { title: 'Name (for Verification)', desc: '' }, 
      { title: 'Email Address', desc: '' }, 
      { title: 'Email Address (for Verification)', desc: '' }, 
      { title: 'Mobile Phone', desc: `No '-', number Only` }, 
      { title: 'Recruitment Job', desc: '' }, 
      { title: 'Resume and Job Experience', desc: '' }, 
      { title: 'Other Matters to be Stated', desc: '' }, 
   ],
   btn: [
      {
         desc: [ 'I understand and agree with ', 'the handling of personal information of LG Japan Lab Inc. and LG Group.', '', 'Please check this box' ],
         modalAccept: 'Agree to Privacy Policy',
         modalClose: 'Close Privacy Policy',
      },
      {
         title: [ 'Submit', 'Saving...' ],
         desc: '※ The answer may take some time. We ask for your understanding.',
      }
   ],
   etc: {
      required: '',
      select: 'Select',
   },
};

const recruitApplication = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default recruitApplication;