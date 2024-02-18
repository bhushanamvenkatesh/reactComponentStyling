import Boxes from './boxes';

function App() {
  let persons=[
    {
    'name':'venkatesh',
    'age':'28',
    'gender':'male',
    'city':'hyderabad'
  },
  {
    'name':'rajini',
    'age':'27',
    'gender':'male',
    'city':'rangareddy'
  },

  {
    'name':'sai',
    'age':'30',
    'gender':'male',
    'city':'nzb'
  },
  {
    'name':'omkar',
    'age':'28',
    'gender':'male',
    'city':'mdk'
  },
  {
    'name':'balu',
    'age':'28',
    'gender':'male',
    'city':'knr'
  },



]
  return ( <Boxes arr={persons}/>
    
  );
}

export default App;
