import { useState ,useEffect } from "react";
import { getAllLaunchers } from "../services/launcherService";


function HomePage(){
    const[launchers,setLaunchers]=useState([])
    const[search,setSearch]=useState('')
    const[filter,setFilter]=useState('')

    useEffect(()=>{
        getAllLaunchers().then(setLaunchers)
    },[])
}