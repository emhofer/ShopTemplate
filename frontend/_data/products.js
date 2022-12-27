const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "http://127.0.0.1:1337/api/products";

  /* This returns a promise */
  let response = await EleventyFetch(url, {
    duration: "1h", // save for 1 week
    type: "json", // we’ll parse JSON for you
  });

  return response.data;
};
