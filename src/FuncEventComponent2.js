import {useState} from "react";


const FuncEventComponent2 = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { message,username} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert('이름:' + username + '\nmessage:' + message);
        // const nextForm = {
        //     ...form,
        //     username: '',
        //     message: ''
        // };
        // setForm(nextForm);
        setForm({
            username: "",
            message: ''
        })
    };
    const keyEnter = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>함수형 변형</h1>
            <input value={username} type='text' onKeyDown={keyEnter} name='username' placeholder={'이름'} onChange={onChange}/>
            <input value={message} type='text' onKeyDown={keyEnter} name='message' placeholder={'메세지'} onChange={onChange}/>

        </div>
    );
};

export default FuncEventComponent2;

