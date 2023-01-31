const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    var data = JSON.stringify({
        "collection": req.query.collection,
        "database": "portfolio",
        "dataSource": "portfolio"
    });

    var config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-tzabb/endpoint/data/v1/action/find',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': "*",
            'api-key': '3GyikMRY0wSbkfuQsjksyahpa8aLDb8soc7O1frRn0YawUUfWXlrC4X2IYqfZhvT',
        },
        data: data
    };
    axios(config)
        .then(response => res.json(response.data))
});



app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});