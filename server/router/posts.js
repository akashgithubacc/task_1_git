import express from "express";
import FrequencyOfLogs from "../models/frequencyOfLogs.js";
import StoreValue from "../models/storeValue.js";
import { n_gramsComparision } from "../controllers/n_gramsComparision.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { value } = req.body;

  const frequencyOfLogs = await FrequencyOfLogs.findOne();
  frequencyOfLogs.count += 1;
  console.log(`Count : ${frequencyOfLogs.count}`);
  await frequencyOfLogs.save();

  const { similarity, commonNgrams, String1, String2 } =
    await n_gramsComparision({ value });

  //console.log(similarity);
  //console.log(commonNgrams);

  res.json({ similarity, commonNgrams, String1, String2 });
});

export default router;
