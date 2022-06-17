import {useState} from "react";


const FuncEventComponent = () =>{
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setMessage('');
        setUsername('');
    };
    return (
        <div>
            <h1>함수형으로 변경</h1>
            <input type='text' name='username' placeholder='사용자명 ' value={username} onChange={onChangeUsername}/>
            <input type='text' name='message' placeholder='메세지 ' value={message} onChange={onChangeMessage}/>
            <button onClick={onClick} >클릭</button>
        </div>
    );
}

export default FuncEventComponent;

