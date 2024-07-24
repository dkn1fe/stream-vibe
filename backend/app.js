const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth');
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyparser.json())
app.use('/auth',authRoutes)

app.use(cors());

mongoose.connect('mongodb+srv://dknife:werthvfy@clusterdknife.lqxnutb.mongodb.net/streamvibe?retryWrites=true&w=majority&appName=ClusterDknife', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
})