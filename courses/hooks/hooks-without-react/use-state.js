function useState(initialValue) {

  let value = initialValue;

  const setValue = newValue => {
    value = newValue;
  };

  return [value, setValue];
}

const [counter, setCounter] = useState(1);
console.log(counter);
setCounter(10);
console.log(counter);
