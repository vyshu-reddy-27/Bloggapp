const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/admin', postRoutes);


mongoose.connect(process.env.MONGO_URI,{

})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) =>{ console.log(err)
    });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
