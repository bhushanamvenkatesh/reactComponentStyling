import Box from "./Box";

function App() {
  const person = {
    'name': 'venkatesh',
    'age': 25,
    'gender': 'male'
  }
  return (<Box arr={person} />

  );
}

export default App;
