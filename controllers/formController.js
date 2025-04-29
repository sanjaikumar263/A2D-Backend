import { sendMail } from "../mailer/mailer.js";
import User from "../moduls/moduls.js";
import SecUser from "../moduls/secmodul.js";

export const spaceform = async (req, res) => {
    const body = req.body;

    try {
        await User.create(body);
        res.status(201).json({
            message: 'Success'
        })
        const email = body.email;
        const subject = 'Booking For Consultancy'
        const html = `<h1>Appointment Booked</h1>`

        await sendMail(email, subject, html)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const spaceform1 = async (req, res) => {
    const body = req.body;
    try {
        await SecUser.create(body);
        res.status(201).json({
            message: "Success"
        })
        const email = body.email;
        const subject = 'Booking For Consultancy'
        const html = `<h1>Appointment Booked</h1>`

        await sendMail(email, subject, html)
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}