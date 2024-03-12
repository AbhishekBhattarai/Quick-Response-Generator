// import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

import inquirer from 'inquirer';

inquirer
  .prompt([
    {message:"Type In your url",
     name:"URL",}
  ])
  .then((answers) => {
    var url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrr.png'));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // 
    } else {
      // 
    }
  });