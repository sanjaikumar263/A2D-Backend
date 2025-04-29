import nodemailer from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config()

const transporter = nodemailer.createTransport(
    {
        secure:true,
        host:'smtp.gmail.com',
        port:465,
        auth:{
            user:process.env.EMAIL_ADDRESS,
            pass:process.env.PASSWORD
        }
    }
)


transporter.verify((error, success) => {

    if (error) {

        console.error("Error with SMTP transporter:", error);

    } else {

        console.log("SMTP transporter is ready to send emails!");

    }

});

export const sendMail = async(to,sub,html)=>{
    const info = await transporter.sendMail({
        to:to,
        subject:sub,
        html:html
    })

    console.log("Email Id",info.messageId);
    
}