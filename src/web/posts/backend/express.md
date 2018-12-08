
`npm i --save-dev express`

    const express = require('express');
    const app = express();
    const port = process.env.PORT || 5001;

    app.get('*.bundle.js', function (req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      next();
    });

    app.use('/', express.static('dist'));

    app.listen(port);

    console.log(`SERVER: Listening on port ${port}`);
