import { MdDelete } from "react-icons/md";
import { useStore } from "../store";
const Task = ({title}:{title:string}) => {
  const deleteTask = useStore((store)=>store.deleteTask);
  const setDragTask = useStore((store)=>store.setDragTask);
  return (
    
    <div className="bg-white rounded-xl h-fit p-3 mt-5 shadow-sm flex justify-between items-center" draggable onDragStart={()=>setDragTask(title)}>
        {title}
        <MdDelete className="w-5 h-5 hover:cursor-pointer " onClick={()=>deleteTask(title)} />
    </div>
  )
}
export default Task