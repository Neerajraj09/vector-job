const mongoose = require("mongoose");
const dns = require('dns');
dns.setServers(['1.1.1.1' , '8.8.8.8']);
async function main() {
  await mongoose.connect(
  "mongodb+srv://neeraj:neeraj0909@cluster0.433exuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
main()
  .then(() => {
    console.log("Freelancer Database Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().getTime(),
  },
  skills: {
    type: String,
    default: "Skills",
  },
  description: {
    type: String,
    default: "descrition Description Description Description Description",
  },
  fullname: {
    type: String,
    default: "Fullname",
  },
  applied: {
    type: [String],
  },
  chatClient: {
    type: [String],
  },
  overallRating: {
    type: Number,
    default: 0,
  },
  CompletionRatings: {
    type: Number,
    default: 0,
  },
  numberOfRatings: {
    type: Number,
    default: 0,
  },
});

const freelancer = mongoose.model("Freelancer", userSchema);
module.exports = freelancer;
