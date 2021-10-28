/* eslint-disable array-callback-return */
import React from "react";
import axios from "axios";
import './bank.css'
// import InputButtons from "./inputButtons";

const Users = ({user , handleType ,handleClick}) => {
    const [userData, setUserData] = React.useState([])
    const [balance, setBalance] = React.useState(0);
    // const [cash, setCash] = React.useState([]);

    React.useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
         calculateBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [userData])

    const getData = async () => {
        await axios.get(`https://6178f9f3aa7f340017404669.mockapi.io/users/${user.id}/bank`).then(res => {
            setUserData(res.data);
        });
    }

    const calculateBalance = () => {
        let arr = [];
      userData.map(usr => {
            console.log("cash: ", usr.cash);
    
            (usr.isWithdrawal) ? arr.push(usr.cash * -1) : arr.push(usr.cash);
            console.log(arr);
    
            let arrSum = arr.reduce((a, b) => a + b, 0)
            console.log("balance: ", arrSum);
    
             setBalance(arrSum);
        })
    }

    return (<div>
        <div className='users'>
            <img
            alt='user'
            src={user.avatar}
            style={{ width: "10%", height: "10%" }}
          ></img>
            <h2> {user.name}</h2>  

            <h6>Age :{user.age}</h6> 
              <h6> From {user.country}</h6>
            <h5> Balance: <span style={{color: balance < 0 ? "red" : "green"}}>{balance}</span></h5><hr></hr><hr></hr>
           

        </div>

        </div>
    )
}

export default Users;

