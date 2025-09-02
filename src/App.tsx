import Columns from "./components/Columns"
import { useStore } from "./store";

const App = () => {
    const addTask = useStore((store)=>store.addTask);
  return (
    <div className="h-screen p-10 bg-gray-200">
      <div className="bg-gray-100 h-full  rounded-2xl pl-60 py-5 pr-3 flex flex-col gap-3">
        <button className="bg-gray-200 p-3 px-5 rounded-xl w-fit cursor-pointer " onClick={()=> {addTask('NewTask',"Done")} }>Add Task</button>
    <div className="bg-white h-full rounded-2xl flex gap-7 px-20 shadow-sm">
      <Columns state={"Planned"}/>
      <Columns state={"Ongoing"}/>
      <Columns state={"Done"}/>
    </div>
    </div>
    </div>
  )
}
export default App