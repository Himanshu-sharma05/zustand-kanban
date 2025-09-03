import { useState } from "react";
import Columns from "./components/Columns"
import { useStore } from "./store";

const App = () => {
  const [text,setText] = useState<string>('');
  const [state,setState] = useState<'Planned' | 'Ongoing' | 'Done'>('Planned');
  const [open,setOpen] = useState<boolean>(false); 
    const addTask = useStore((store)=>store.addTask);
  return (
    <div className="h-screen p-10 bg-gray-200">
      <div className="bg-gray-100 h-full  rounded-2xl pl-60 py-5 pr-3 flex flex-col gap-3">
        <button className="bg-gray-200 p-3 px-5 rounded-xl w-fit cursor-pointer " onClick={()=> setOpen(true) }>Add Task</button>
    <div className="bg-white h-full rounded-2xl flex gap-7 px-20 shadow-sm">
      <Columns state={"Planned"}/>
      <Columns state={"Ongoing"}/>
      <Columns state={"Done"}/>
    </div>
    <div>
      {
        open && (<div className="modal absolute bg-gray-200 w-1/4 h-1/2 top-40 rounded-2xl  p-5">
          <div className="flex flex-col gap-3 mt-10">
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className="border-1 border-black p-3 px-4 rounded-lg" />
            <div className="flex justify-around">
              <button onClick={()=>setState('Planned')} className={" p-2 px-5 rounded-lg bg-white"}>Planned</button>
              <button onClick={()=>setState('Ongoing')} className={"bg-white p-2 px-5 rounded-lg"}>Ongoing</button>
              <button onClick={()=>setState('Done')} className={"bg-white p-2 px-5 rounded-lg"}>Done</button>
            </div>
          </div>
        
        
        <button onClick={()=>setOpen(false)} className="absolute top-4 right-5">X</button>
        <button onClick={()=>{addTask(text,state); setText(''); setOpen(false)}} className="bg-white rounded-lg py-2 px-5 absolute bottom-5  right-1/2">ADD</button>
      </div>)
      }
    </div>
    </div>
    </div>
  )
}
export default App