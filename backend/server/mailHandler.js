import mailjet from "node-mailjet";
import config from "../server/config.json" assert { type: "json" };

class mailHandler {
  connect = () => {
    return mailjet.apiConnect(config.mailjetapi, config.mailjetsecret, {
      config: {},
      options: {},
    });
  };

  sendEmail = (firstName, lastName) => {
    const request = this.connect()
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "pilot@mailjet.com",
              Name: "Mailjet Pilot",
            },
            To: [
              {
                Email: "passenger1@mailjet.com",
                Name: "passenger 1",
              },
            ],
            Subject: "Your email flight plan!",
            TextPart:
              "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            HTMLPart:
              '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
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
