const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.emailFeedback = (req, res) => {
    // console.log(req.body);
    const { name, email, message} = req.body;
    const emailData = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_FROM,
        subject: 'Feedback form',
        html: `
            <h1>Customer Feedback Form</h1>
            <hr />
            <h2>Sender name: ${name}</h2>
            <h2>Sender email: ${email}</h2>
            <h2>Sender message: ${message}</h2>
            <br />
            <hr />
            <p>https://nkd-contractors.com</p>
        `
    };

    sgMail
        .send(emailData)
        .then(sent => {
            console.log(sent);
            return res.json({
                success: true
            });
        })
        .catch(err => {
            console.log(err);
            return res.json({
                success: false
            });
        });
};