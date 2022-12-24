const request = require('request');

export default (req, res) => {
  request.get('https://gdsc.community.dev/chapters/', (error, response, body) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    // Parse the response body and extract the data you need
    const data = JSON.parse(body);

    res.status(200).json(data);
  });
};