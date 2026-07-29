const mongoose = require("mongoose");


async function main() {
   await mongoose.connect(
  "mongodb+srv://neerajrajsinghsisodiya2005_db_user:neerajraj@cluster0.2qz1r9b.mongodb.net/vectorjobs?retryWrites=true&w=majority&appName=Cluster0"
);
  }
  main()
    .then(() => {
      console.log("Jobs Database Connection Successfull");
    })
    .catch((err) => {
      console.log(err);
    });
  

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
