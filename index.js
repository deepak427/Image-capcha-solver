import readline from "readline";
import axios from "axios";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter the public url of Captcha image: ",
  async function (imageUrl) {
    const options = {
      method: "POST",
      url: "https://image-captcha-solver.p.rapidapi.com/recognizeUrl",
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': "94513d2b5fmsh75a7fba5ede1876p1b27aejsn63c5e8c5de8e",
        'X-RapidAPI-Host': "image-captcha-solver.p.rapidapi.com"
      },
      data: `{"url": "${imageUrl}" }`,
    };
    console.log("Decoded Captcha is: ")
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
    rl.close();
  }
);

rl.on("close", function () {
  process.exit(0);
});
