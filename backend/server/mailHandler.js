import mailjet from "node-mailjet";

class mailHandler {
  connect = () => {
    return mailjet.apiConnect(process.env.MAIL_API, process.env.MAIL_SECRET, {
      config: {},
      options: {},
    });
  };
  passwordRecovery = (email, firstName) => {
    const request = this.connect()
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "todoooapp@gmail.com",
              Name: "Todooo Help",
            },
            To: [
              {
                Email: `${email}`,
                Name: `${firstName}`,
              },
            ],
            Subject: "Your password recovery!",
            TextPart: `Dear ${firstName}, We guess it's time to recover your password!`,
            HTMLPart: `<h3>Dear ${firstName}, to recover your password click <a href="https://www.mailjet.com/">here</a>!</h3><br />Hope it will fix your problem, peace!`,
          },
        ],
      });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
  };
  accountActivation = (email, firstName, verificationToken) => {
    const request = this.connect()
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "todoooapp@gmail.com",
              Name: "Todooo Help",
            },
            To: [
              {
                Email: `${email}`,
                Name: `${firstName}`,
              },
            ],
            Subject: "Your account activation!",
            TextPart: `Dear ${firstName}, We guess it's time to activate your account!`,
            HTMLPart: `<h3>Dear ${firstName}, to activate your account click <a href="http://localhost:3001/api/verify/${verificationToken}">here</a>!</h3><br />It's all for now, peace!`,
          },
        ],
      });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
  };
}

export default mailHandler;
