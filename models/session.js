const sessionSchema = new mongoose.Schema({
  _id: String,
  session: String,
  expires: Date,
});

const Session = mongoose.model("Session", sessionSchema);
