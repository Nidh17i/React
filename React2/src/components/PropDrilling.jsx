// export const PropDrilling=()=>{
 
//     return(
//     <>
//     <h1>PropDrilling</h1>
//     <ChildComponent data='I Love React'>
//     </>
//     )

// }
// const ChildComponent=(props)=>{


// }

 export const PParent=()=>{
    return(
        <>
        <ChildComponent data="I Love React"/>
        </>
    )
}
const ChildComponent=(props)=>{
    return(
        <>
        <h1>I am ChildComponents</h1>
        <GChildComponents data={props.data}/>
        </>
    )
}


const GChildComponents=(props)=>{
    return(
        <>
        <h1>I am GChildComponents</h1>
        <GGChildComponents data={props.data}/>
        </>
    )
}


const GGChildComponents=(props)=>{
    return(
        <>
        <h2>I am GGParentComponents</h2>
     <h1>{props.data}</h1>
     
     </>
     )

}