const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const emailConfig  =  require("../config/email.config");
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');


// Read the HTML email template
const emailTemplatePath = path.join(__dirname, './emailTemplates/emailTest.ejs');
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport(
    emailConfig[0]
);

// Function to send email
const sendEmail = async (name, email, mobile, message) => {
    try {
        // Render the email template with dynamic variables
        const renderedTemplate = ejs.render(emailTemplate, { name, email, mobile, message });

        // Email options
        const mailOptions = {
            from:  "SurfPoint IO",
            to: email,
            subject: 'Welcome to SurfPoint IO',
            html: renderedTemplate
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Example usage


// const name = 'John Doe';
// const email = 'john.doe@example.com';
// sendEmail(name, email);

module.exports = { sendEmail }