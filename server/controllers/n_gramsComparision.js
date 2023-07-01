import StoreValue from "../models/storeValue.js";
import natural from "natural";
import { comparingNgrams } from "./comparingNgrams.js";

export const n_gramsComparision = async ({ value }) => {
  //console.log(`Value : ${value}`);

  let currentValue = await StoreValue.findOne();

  if (!currentValue) {
    currentValue = new StoreValue({ values: [value] });
  } else {
    currentValue.values.push(value);
  }

  //console.log(currentValue.values);
  const i = currentValue.values.length;

  const String1 = currentValue.values[i - 1];
  const String2 = currentValue.values[i - 2];

  //console.log(String1);
  //console.log(String2);
  await currentValue.save();

  if (i >= 2) {
    const tokenizer = new natural.WordTokenizer();
    const normalizedString1 = String1.toLowerCase();
    const normalizedString2 = String2.toLowerCase();
    const tokens1 = tokenizer.tokenize(normalizedString1);
    const tokens2 = tokenizer.tokenize(normalizedString2);

    const n = 2;
    const ngrams1 = natural.NGrams.ngrams(tokens1, n);
    const ngrams2 = natural.NGrams.ngrams(tokens2, n);

    console.log(ngrams1);
    console.log(ngrams2);

    const setA = new Set(ngrams1);
    const setB = new Set(ngrams2);

    const { similarity, commonNgrams } = comparingNgrams({ ngrams1, ngrams2 });

    //console.log(`Similarity : ${similarity}`);
    //console.log(`Common Ngrams : ${commonNgrams}`);

    return {
      similarity,
      commonNgrams,
      String1,
      String2,
    };
  }
};
