import axios from 'axios'
import { useEffect, useState } from "react"

export const UserData = () => {

    const [userdata, setdata] = useState([]);


    const getAxoisData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/users')
            setdata(res.data.users);
        }
        catch (error) {
            console.log(error.message);
            console.log(error.response.status);



        }
    }



    useEffect(() => {
        getAxoisData();

    }, [])

    return (
        <>
            {userdata.map((curr) => (
                <li>
                    {curr}</li>
            ))}
        </>
    )
}