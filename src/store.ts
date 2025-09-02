import { create } from "zustand";
type Store = (set:any)=>{
    tasks: {title:string,status:string}[];
    addTask:(title:string,status:string)=>void;
}
const store:Store = (set)=>({
    tasks:[{title:"TestTask",status:"Planned"},{title:"Test2",status:"Ongoing"}],
    addTask:(title,status)=>set((state:any)=>({tasks:[...state.tasks, {title,status}]}))
})

export const useStore = create(store);

