const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'gupta.k@northeastern.edu',
        subject: 'Welcome to the App',
        text: `Welcome to the App, ${name}. Let me know how you like the app.`
    })
}

const deactivatEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'gupta.k@northeastern.edu',
        subject: 'Sorry to see you leave',
        text: `Please let us know ${name} if we can do something to change your mind!!`
    })
}
module.exports = {
    sendWelcomeEmail,
    deactivatEmail
}