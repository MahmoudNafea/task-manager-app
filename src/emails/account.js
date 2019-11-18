const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mahmoudnafea19@gmail.com',
        subject: 'Thanks for signing up',
        text: `Nice to see u, ${name}. Tell us ur experience`
    })
}

sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mahmoudnafea19@gmail.com',
        subject: 'Email cancelled',
        text: `We never say goodbye ${name}. Tell us ur experience`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}