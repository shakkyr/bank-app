import React from "react";
import axios from "axios";
import Users from "./users";
import InputButtons from "./inputButtons";
import 'bootstrap/dist/css/bootstrap.min.css';

const Bank = () => {
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState(1);
    const [accountNumber, setaccountNumber] = React.useState(0);
    const [accountPassword, setaccountPassword] = React.useState('');
    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("https://6178f9f3aa7f340017404669.mockapi.io/users")
            .then(res => {
                console.log('sdadasdasdasdasdas', res.data);
                setUsers(res.data);
            });
    }
    const handleClick = () => {
        let usr = users.find(ele =>ele.accountNumber === accountNumber);
        console.log(usr);
        setUser(usr);

    }
    const handleType = (e) => {
        if (e.target.getAttribute("data-whatToAdd") === "accountNumber")
        setaccountNumber(e.target.value);
        if (e.target.getAttribute("data-whatToAdd") === "password")
        setaccountPassword(e.target.value)
    }



    const calculateBalance = (userData) => {
        let arr = [];
        userData.map(usr => {
           

            (usr.isWithdrawal) ? arr.push(usr.cash * -1) : arr.push(usr.cash);
         

            let arrSum = arr.reduce((a, b) => a + b, 0)
            console.log("balance: ", arrSum);

            return arrSum;
        })
    }

    return (
        <div>
            <InputButtons
        inputHandlerCallback={handleType}
        clickHandlerCallback={handleClick}
      />


            {user === 1 ? users.map(user => {
    return <Users user={user}/>
}) : <div>
                <h1>welcom </h1>
                <img src={user.avatar}/>
                <h2>{user.name}</h2>
                <h3> Account Number: {user.accountNumber}</h3>
                <Users user={user} calcBalance={calculateBalance}/>
            </div>}
        </div>
    )
}


export default Bank;


