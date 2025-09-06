import { create } from "zustand";
import { devtools,persist } from "zustand/middleware";
type Store = (set:any)=>{
    tasks: {title:string,status:string}[];
    dragTask:null | string;
    addTask:(title:string,status:string)=>void;
    deleteTask:(title:string)=>void;
    setDragTask:(title:string | null)=>void;
    moveDragTask:(title:string | null,state:string)=>void;
}
type Task = {title:string,status:string};
const store:Store = (set)=>({
    tasks:[],
    dragTask:null,
    addTask:(title,status)=>set((state:any)=>({tasks:[...state.tasks, {title,status}]})),
    deleteTask:(title)=>set((state:any)=>({tasks: state.tasks.filter((task:Task)=> task.title != title ) })),
    setDragTask:(title)=>set({dragTask:title}),
    moveDragTask:(title,status)=>set((state:any)=>({tasks: state.tasks.map((task:Task) =>  (task.title === title) ? {title,status} : task) }))
})

export const useStore = create(persist(devtools(store),{name:"store"}));

