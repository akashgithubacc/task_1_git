import mongoose from "mongoose";

const storeValueSchema = new mongoose.Schema({
  values: {
    type: [String],
  },
});

const StoreValue = mongoose.model("StoreValue", storeValueSchema);

export default StoreValue;
