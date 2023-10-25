import { Schema, model, models } from "mongoose";

const JobSchema = new Schema({
  companyName: {
    type: String,
    required: [true, "Company name required."],
  },
  jobId: {
    type: String,
  },
  position: {
    type: String,
    required: [true, "Please specify the position title."],
  },
  dateApplied: {
    type: Date,
    required: [true, "Please enter the date you applied."],
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    required: [true, "Please enter in the country of the job"],
  },
});

const Job = models.Job || model("Job", JobSchema);

export default Job;
