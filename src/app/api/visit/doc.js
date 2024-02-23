export const docSubmit = (data) => {

   let document = `
      <!DOCTYPE html>
      <html lang='en'>
      <head>
         <meta charset='UTF-8'>
         <meta name='viewport' content='width=device-width, initial-scale=1.0'>
         <title>Visit application data</title>
      </head>
      <body>
      <div style='margin: 50px 10px;'>
         <h2>Visit application data</h2>
         <div style='margin: 20px 10px;'>
            <p>company: ${data.company}</p>
            <p>Name : ${data.name}</p>
            <p>Email : ${data.email}</p>
            <p>Mobile : ${data.mobile}</p>
            <p>Visit date : ${data.visitDate}</p>
            <p>Visit time : ${data.visitTime}</p>
            <p>Carrying-ins</p>
   `;

   data.carryingIns.map((carryingIn, i) => {
      document += `<p style='padding-left: 10px;'>Item #${i}</p>`;
      Object.entries(carryingIn).map((desc, j) => {
         document += `<p style='padding-left: 20px;'>${desc[0]} : <strong>${desc[1]}</strong></p>`;
      });
   });

   document += `
               <p>Conference room use : ${data.conferenceRoomUse}</p>
               <p>People : ${data.people}</p>
               <p>Start time : ${data.startTime}</p>
               <p>End time : ${data.endTime}</p>
               <p>Laboratory use : ${data.laboratoryUse}</p>
               <p>Laboratory : ${data.laboratory}</p>
               <p>Privacy check : ${data.privacyCheck}</p>
               <p>Pledge check : ${data.pledgeCheck}</p>
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
         <title>Visit application data</title>
      </head>
      <body>
         <div style='margin: 50px 10px;'>
            <h2>Reply email to your visit application</h2>
            <div style='margin: 20px 10px;'>
               <p>We have received the Visit application data you submitted successfully.</p>
               <p>From now on, we will review the submitted data and let you know whether it has been approved or not.</p>
               <p>If you have any questions, please contact us at any time.</p>
            </div>
         </div>
      </body>
      </html>
   `;

   return document;
};