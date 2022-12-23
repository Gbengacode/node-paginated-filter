import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const dbConfig = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      console.log(error);
    });
  mongoose.connection.on("connected", () => {
    console.log("connected");
  });

  mongoose.connection.on("error", (error) => {
    console.log(`error ${error}`);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
  });
};

export default dbConfig;
