export const mockBookList = () => {
  return Promise.resolve([
    { id: 1, name: "Name of the Wind" },
    { id: 2, name: "The Wise Man's Fear" },
    { id: 3, name: "Kafka on the Shore" },
    { id: 4, name: "The Master and the Margarita" },
  ]);
};