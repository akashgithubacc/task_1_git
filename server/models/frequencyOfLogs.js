import mongoose from "mongoose";

const frequencyOfLogsSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const FrequencyOfLogs = mongoose.model(
  "FrequencyOfLogs",
  frequencyOfLogsSchema
);

export default FrequencyOfLogs;
