let counter = 0;
const Counter = () => {
  console.log(counter++);
  setTimeout(Counter, 1000);
}
Counter();