
import { useStore } from "../store"
import Task from "./Task"

const Columns = ({state}:{state: "Planned" | "Ongoing" | "Done"}) => {
  
    const tasks = useStore((store)=>store.tasks);
    const newTask = tasks.filter((task)=>task.status === state);
  return (
    <div className="min-h-1/2 h-fit bg-gray-100 rounded-xl w-1/3 mt-20 p-5 shadow-sm ">
        <p>{state}</p>
        {newTask.map((task)=> <Task title={task.title} key={task.title}/> )}     

    </div>
  )
}
export default Columns