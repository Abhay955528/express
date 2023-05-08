const fs = require("fs");

const requestHeadler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.text", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(`data form file` + data);
      res.write("<html>");
      res.write("<head><tittle>Enter Massage - </tittle></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text", message, (err) => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><tittle>Enter Massage</tittle></head>");
    res.write("<body><h1>Hello form my Node.js Server</h1></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHeadler;

// module.exports = {
//  handler: requestHandler,
// someText: ‘Some hard coded text’
// };

// module.exports.handler = requestHandler;
// module.exports.handler = 'Code is Running';

// exports.handler = requestHandler;
// exports.handler =  'Code is Running';
