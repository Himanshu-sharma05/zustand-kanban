
import { useStore } from "../store"
import Task from "./Task"

const Columns = ({state}:{state: "Planned" | "Ongoing" | "Done"}) => {

    const tasks = useStore((store)=>store.tasks);
    const newTask = tasks.filter((task)=>task.status === state);
    const setDragTask = useStore((store)=>store.setDragTask);
    const dragTask = useStore((store)=>store.dragTask);
    const moveDragTask = useStore((store)=>store.moveDragTask);
  return (
    <div className="min-h-1/2 h-fit bg-gray-100 rounded-xl w-1/3 mt-20 p-5 shadow-sm "  onDragOver={e=>e.preventDefault()} onDrop={(e)=>{console.log(dragTask); moveDragTask(dragTask,state); setDragTask(null); }}>
        <p>{state}</p>
        {newTask.map((task)=> <Task title={task.title} key={task.title}/> )}     

    </div>
  )
}
export default Columns