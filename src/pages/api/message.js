const path = require("path");
const fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body);

    fs.writeFile(
      path.resolve(process.cwd() + `/public/messages/${email}.txt`),
      "name:\n" +
        name +
        "\n\n" +
        "email:\n" +
        email +
        "\n\n" +
        "message:\n" +
        message,
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      }
    );

    return res.status(200).json({ message: "Successfully send message!" });
  }
}
