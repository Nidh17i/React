 

 export const UserLogin=({handleLogin})=>{
    const fromSubmit=handleLogin;

return(
    <>
    <form onSubmit={ fromSubmit}>
        <h1>Login Form</h1>
        <input type="text"
        placeholder="enter UserName"/>
        <br/><br/>
        <input type="text"
        placeholder="enter Password"
        
        />
        <br/><br/>
        <button>Login</button>
    </form>
    </>
)

 }