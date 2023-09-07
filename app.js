const express = require('express');
const axios = require('axios');
const schedule = require('node-schedule');

const app = express();

const links = process.env.LINKS
console.log(links)
const job = schedule.scheduleJob('*/13 * * * *', function(){
  links.forEach(async (link) => {
    try {
      const response = await axios.post(link, {"Nebulous":"Pigeon"});
      console.log(`Successfully posted to ${link}`);
    } catch (error) {
      console.error(`Error posting to ${link}: ${error}`);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
