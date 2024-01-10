import { useAppSelector } from "../store";
import { useState } from "react";
import { useAppDispatch } from "../store";
import actions from "../store/actions";



const Example = () => {

  const examples = useAppSelector((state) => state.example.examples);
  const [exampleName, setExampleName] = useState('')
  const dispatch = useAppDispatch();
  const handleClick = () => {
    console.log('Actions>', actions)
    dispatch(actions.example.add({ name: exampleName }))
    setExampleName('');
  }

  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => setExampleName(e.target.value)

  return (
    <div>
      <p>This the Example component</p>
      <div>
        {examples.length > 0 && examples.map(e => (<div key={e.id}>🔵 {e.id} {e.name}</div>))}
      </div>
      <div>
        <label htmlFor="name">➕ </label>
        <input id="name" autoComplete="off" onChange={handleInputchange} value={exampleName} />
        <button onClick={handleClick}>
          ✔️
        </button>
      </div>
    </div>
  );
};

export default Example;
