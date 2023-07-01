import natural from "natural";

export const comparingNgrams = ({ ngrams1, ngrams2 }) => {
  //console.log(ngrams2);
  //console.log(ngrams1);
  const setA = ngrams1;
  const setB = ngrams2;

  const setASet = new Set(setA.map(JSON.stringify));
  const setBSet = new Set(setB.map(JSON.stringify));

  const intersection = new Set([...setASet].filter((x) => setBSet.has(x)));
  const union = new Set([...setASet, ...setBSet]);
  const similarity = intersection.size / union.size;
  return {
    similarity,
    commonNgrams: Array.from(intersection),
  };
};
