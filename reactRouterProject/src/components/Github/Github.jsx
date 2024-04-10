// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Prathamcod')
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, []);

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers :{data.followers}

            <img className="text-center" src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github;
