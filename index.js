"use strict";

let express = require('express');
let app = express();

app.get(process.env.HEALTHCHECK || '/hc', (req, res) => res.send('OK'));
app.listen(process.env.PORT || 8080);
