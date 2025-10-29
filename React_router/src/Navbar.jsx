import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

export const NavBar = () => {
    return (
        <>

            <div style={{
                backgroundColor: '#e8edea',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                height: '40px',
                textAlign: 'center'
            }}>

                <div>
                    <Link style={{ textDecoration: 'none' }} to=''>Logo</Link>
                </div>
                <div>
                    <ul style={{
                        display: 'flex',
                        margin: 'auto',
                        justifyContent: "space-around",
                        width: '300px',
                        listStyleType: 'none'
                    }}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>

                        </li>
                        <li>
                            <Link to="contact">contact</Link>
                        </li>
                        <li>
                            <Link to="project">Project</Link>
                        </li>
                          <li>
                            <Link to="/developer">Developer</Link>
                        </li>
                    </ul>

                </div>

            </div >

            {/* <Link to='/dynamicRoute'>dynamicRoute</Link> */}
            
            <div>

            </div>


        </>
    )
}