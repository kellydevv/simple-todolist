import React, { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos,setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {event.preventDefault();
    console.log(toDo);
    if (toDo ===""){
      return;
    }
    setToDo("");
    //array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법 
    //1. 첫번째 인자로 현재의 state 받아오기(currentArray==currentToDos)
    //2.새로운 array return 해주기([])
    //3. 새로운 array는 state에 있는 toDo와 모든 이전의 toDos
    //4. ...을 넣으면 array에 인덱스들을 가져올 수 있다.

    //1.처음에는 비어있는 array([])를 가지게 된다. (5th line)
    //2. currentArray자리에 먼저 비어있는 currentArray를 받아온다
    //3. 결국 새로운 toDos가 input을 통해 작성한 toDo와 비어있는 array(currentArray)의 element(...을 적었으니까)와 더해지게 된다.
    setToDos(currentArray=>[toDo, ...currentArray])
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index)=> 
      <li key={index}>{item}</li>)}
      </ul>
      </div>
  );
}

export default App;
