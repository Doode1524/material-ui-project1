const functions = require("firebase-functions");
const config = functions.config();
const cors = require("cors")({origin: true});
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {user: config.user.email, pass: config.user.password},
});

const mailOptions = {
  from: "material-ui-project1",
  to: "Doode1524@gmail.com",
  subject: "testing nodemailer",
  text: "test successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("message sent successfully");
      }
    });
  });
  //   functions.logger.info("Hello logs!", {structuredData: true});
});
