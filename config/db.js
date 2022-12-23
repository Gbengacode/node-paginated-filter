import mongoose from "mongoose";


mongoose.connect(proces.env.CONNECTION_URL, {
    useNewUrlParser: true,
})