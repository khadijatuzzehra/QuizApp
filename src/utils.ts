export const shuffleArray = (array: any[]) => {
  let data = [...array].sort(() => Math.random() - 0.5);
  console.log(data, "here");
  return data;
};
