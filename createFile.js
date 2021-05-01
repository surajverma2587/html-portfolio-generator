const fs = require("fs");

const createFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Portfolio created successfully!!");
    }
  };

  fs.writeFile("portfolio.html", data, callback);
};

module.exports = createFile;
