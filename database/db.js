import mongoose from "mongoose";

const Connection = () => {
    const DB_URI =`mongodb+srv://sakthi:gmail@cluster0.ex1icpt.mongodb.net/?retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("database connection done");
  } catch (error) {
    console.log(`Error while connecting to database ${error.message}`);
  }
};

export default Connection