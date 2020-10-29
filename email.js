const my_mail = process.env.Email;
const nodemailer = require("nodemailer"); 

  
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: my_mail, 
        pass: process.env.Password
        //pass: process.env.PsycoolPassword
    }
}); 
  
let mailDetails = { 
    from: my_mail, 
    to: my_mail, 
    subject: "null", 
    html: "null"
}; 


signup_mail = (toMail, username) => {
    mailDetails.to = toMail;
    mailDetails.subject = "Welcome";
    mailDetails.html = `Hi ${username},<br/>I am Shivam. Thank you for signing up. Me and my team are always ready to help, so in case of any doubts or queries drop a mail on this same mail and we'll revert back to you as soon as possible.<br/><br/>Regards,<br/>Shivam Mathwad`;
    
    mailTransporter.sendMail(mailDetails, function(err, data) { 
        if(err) { 
            console.log(err); 
        } 
    });
}


module.exports.signup_mail = signup_mail; 