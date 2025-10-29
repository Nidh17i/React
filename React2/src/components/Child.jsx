export const Child=({data})=>{
    return(
        <>
        <li>
            <div style={{border:'2px solid black', color:'pink'}}>
            <h1>{data.name}</h1>
            <h1>{data.city}</h1>
            </div>
        </li>
        </>
    )

}