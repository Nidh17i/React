import { Link, Outlet } from "react-router-dom"

export const Developer = () => {
    return (
        <>
            <Link to='beginer'>Beginer</Link>
            <br />
            <Link to='medium'>Medium</Link>
            <br />
            <Link to="advance">Advance</Link>
            
            <Outlet />

        </>
    )
}