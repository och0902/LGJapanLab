export const docSubmit = (data) => {

   let document = `
      <!DOCTYPE html>
      <html lang='en'>
      <head>
         <meta charset='UTF-8'>
         <meta name='viewport' content='width=device-width, initial-scale=1.0'>
         <title>Careers application data</title>
      </head>
      <body>
      <div style='margin: 50px 10px;'>
         <h2>Careers application data</h2>
         <div style='margin: 20px 10px;'>
            <p>Name : ${data.name}</p>
            <p>Kana : ${data.nameKana}</p>
            <p>Email : ${data.email}</p>
            <p>Mobile : ${data.mobile}</p>
            <p>Recruitment job : ${data.recruitmentJob}</p>
   `;

   data.files.forEach((file, i) => {
      document += `
         <p>File#${i}: <strong>${file.filename}</strong>, Path: <strong>${file.path}</strong></p>
      `;
   });

   document += `
               <p>Other matters : ${data.otherMatters}</p>
               <p>Privacy check : ${data.privacyCheck}</p>
            </div>
         </div>
      </body>
      </html>
   `;

   return document;
}; 


export const docReply = () => {

   let document = `
      <!DOCTYPE html>
      <html lang='en'>
      <head>
         <meta charset='UTF-8'>
         <meta name='viewport' content='width=device-width, initial-scale=1.0'>
         <title>Careers application data</title>
      </head>
      <body>
         <div style='margin: 50px 10px;'>
            <h2>Reply email to your careers application</h2>
            <div style='margin: 20px 10px;'>
               <p>We have received the careers application data you submitted successfully.</p>
               <p>From now on, we will review the submitted data and proceed with the recruitment process.</p>
               <p>If you have any questions, please contact us at any time.</p>
            </div>
         </div>
      </body>
      </html>
   `;

   return document;
};