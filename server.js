import dotenv from 'dotenv'
dotenv.config();
import express from 'express'

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
const PORT = 5000
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})