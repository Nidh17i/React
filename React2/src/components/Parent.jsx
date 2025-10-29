import { Child } from "./Child"

export const Parent=()=>{
    const userData=[
        {name:'Nidhi',city:'Delhi'},
        {name:'Neha',city:'Noida'},
        {name:'Naina',city:'Balaghat'}
    ]
    return(
        <>
        {userData.map((data)=>{
            return <Child data={data}/>
        })}
        </>
    )
}