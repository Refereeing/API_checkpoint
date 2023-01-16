import React, {useEffect, useState} from 'react';
import axios from 'axios';
import User from './User';

const UserList = () => {
    
    //let x = axios.get("https://jsonplaceholder.typicode.com/posts")
                 //.then((res)=> console.log(res.data))
                 //.catch((err)=> console.log(err));
    //console.log(x);
    
    // where to store the returned data
    const [listOfUser, setListOfUser]=useState ([])


    //tell React we need to use an effect everytime the component render
    //access the listOfUser state right from the effect
    //it replaces component's lifecycle
    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setListOfUser(res.data))
        .catch((err)=> console.log(err));

    }, []);


    return (
    <div className="user-card">
        {/*{listOfUser.map((user)=> console.log(user.name))};*/}
        {listOfUser.map((scent)=> <User scent={scent}/>)}

    </div>
  )
}

export default UserList