const jpn = {
   toasts: {
      error: [ 
         '必須項目を抜けずに入力してください。',
         'LGグループの関連会社のメールアドレスのみが許可されています。',
         'プライバシーポリシーと訪問者の誓約に同意してください。',
         'データ処理中にエラーが発生しました。',
      ],
      message: [
         '入力したデータは正常に処理されました。',
      ],
   },
   pageHero: {
      title: '訪問申請',
      desc: [ 'LG系列会社の社員を対象にした訪問申請です。', '訪問申請 マニュアル ダウンロード', '表示された項目は必須です。' ],
   },
   catagory: [
      {
         title: '訪問者情報',
         desc: '',
         item: {
            company: '会社',
            name: 'お名前',
            email: 'メールアドレス',
            mobile: '携帯電話',
            visitDate: '訪問日',
            visitTime: '訪問時間',
         }
      },
      {
         title: '搬入物',
         desc: '(対象物 : Notebook、USB、HDDなどのデジタル記録メディア)',
         item: {
            device: '搬入物',
            deviceNo: '搬入物番号',
            purpose: '搬入目的',
            serial: 'シリアル番号',
            unsealed: 'ポート封印除外',
            reason: 'ポート封印除外の理由',
            wifi: 'Wi-Fi 接続',
            wirelessMAC: 'ワイヤレス MAC アドレス',
            cloudConnection: 'クラウドPC 接続',
            cloudIP: 'クラウドPC IPアドレス',
            cloudVMIP: 'クラウドPC VM IPアドレス',
            cloudConnectionIP: 'クラウドPC 接続 IPアドレス',
         }
      },
      {
         title: '会議室の使用申請',
         desc: '(複数の人が使用している場合は、担当者1名が記入します。)',
         item: {
            conferenceRoomUse: '会議室の使用',
            people: '人数',
            startTime: '開始時間',
            endTime: '終了時間',
         },
      },
      {
         title: '実験室の使用申請',
         desc: '(2名以上の方がご利用の場合は、1名の担当者がご記入ください。)',
         item: {
            laboratoryUse: '実験室使用',
            laboratory: '実験室選択',
            privacyCheck: 'プライバシーポリシー', 
            pledgeCheck: '訪問者の誓約',
         },
      },
   ],
   btn: [
      {
         title: 'プライバシーポリシー',
         desc: '上記を確認し、個人情報の収集·利用に同意します。',
         modalAccept: 'プライバシーポリシーに同意する',
         modalClose: 'プライバシーポリシーを閉じる',
      },
      {
         title: '訪問者の誓約',
         desc: '上記の内容を確認し、訪問者の誓約に同意します。',
         modalAccept: '訪問者の誓約に同意する',
         modalClose: '訪問者の誓約を閉じる',
      },
      {
         title: [ 'Submit', 'Saving...' ],
         desc: '※ 回答に時間がかかる場合があります。 ご理解のほどよろしくお願いします。',
      }
   ],
   etc: {
      required: '必須',
      select: '選択',
      addItems: '搬入物追加',
   },
   success: {
      title: '訪問申込書が提出されました。',
      desc: [
         '訪問当日、横浜ビル2階の受付で確認できる社員証や名刺を提出してください。',
         'スマートフォンのカメラ、ノートパソコンのポートを密封して入場してください。',
         '2日以上連続訪問の場合は、チェックアウトの際に2階の受付に出入証を返却し、翌日チェックインの際に再度お受け取りください。 出入国カードは取り出さないでください。',
      ],
   },
};

const eng = {
   toasts: {
      error: [ 
         'Please enter all required items.',
         'Only email addresses of LG Group affiliates are accepted.',
         'Please agree to the privacy policy and visitor pledge.',
         'An error occurred during data processing.',
      ],
      message: [
         'The data you entered has been processed successfully.',
      ],
   },
   pageHero: {
      title: 'Visiting Application',
      desc: [ 'This is only for employees of LG affiliated companies.', 'Visit Application Manual Download', 'marked items are required.' ],
   },
   catagory: [
      {
         title: 'Visitor Information',
         desc: '',
         item: {
            company: 'Company',
            name: 'Name',
            email: 'Email Address',
            mobile: 'Mobile Phone',
            visitDate: 'Date of Visit',
            visitTime: 'Visiting Time',
         }
      },
      {
         title: 'Carrying-in Item',
         desc: '(entry target: digital recording media such as Labtop, USB, HDD)',
         item: {
            device: 'Device',
            deviceNo: 'Device No',
            purpose: 'Purpose',
            serial: 'Serial Numbe',
            unsealed: 'Unsealed',
            reason: 'Unsealed Reason',
            wifi: 'Wi-Fi Connection',
            wirelessMAC: 'Wireless MAC Address',
            cloudConnection: 'Cloud PC Connection',
            cloudIP: 'Cloud PC IP Address',
            cloudVMIP: 'Cloud PC VM IP Address',
            cloudConnectionIP: 'Cloud PC Connection IP Address',
         }
      },
      {
         title: 'Application for Use of the Conference Room',
         desc: '(if more than one person is using it, one representative will fill it out)',
         item: {
            conferenceRoomUse: 'Conference Room Use',
            people: 'Number of People',
            startTime: 'Start Time',
            endTime: 'End Time',
         },
      },
      {
         title: 'Application for Laboratory Use',
         desc: '(if more than one person is using, one representative will fill in)',
         item: {
            laboratoryUse: 'Laboratory Use',
            laboratory: 'Laboratory',
         },
      },
   ],
   btn: [
      {
         title: 'Privacy Policy',
         desc: 'I have checked the above and agree to collect and use personal information.',
         modalAccept: 'Agree to Privacy Policy',
         modalClose: 'Close Privacy Policy',
      },
      {
         title: 'Visitor Pledge',
         desc: `I have checked the above and I agree to the visitor's pledge.`,
         modalAccept: 'Agree to Visitor Pledge',
         modalClose: 'Close Visitor Pledge',
      },
      {
         title: [ 'Submit', 'Saving...' ],
         desc: ' It may take some time to respond. Thank you for your understanding. Continuous submissions are not available in 10 minutes.',
      }
   ],
   etc: {
      required: '',
      select: 'select',
      addItems: 'Add items to be carried in',
   },
   success: {
      title: 'Your visit application has been submitted.',
      desc: [
         'On the day of your visit, please submit an employee card or business card that can be identified at the reception desk on the second floor of the Yokohama building.',
         'Seal your smartphone camera, laptop port and get your pass.',
         'If you visit for more than 2 days in a row, please return the pass to the reception desk on the 2nd floor when you check out and receive it again when you check in the next day. (Do not take out the immigration card.)',
      ],
   },
};

const visitApplication = ( language ) => {
   switch ( language ) {
      case 'Jpn' : return jpn;
      case 'Eng' : return eng;
   };
};

export default visitApplication;