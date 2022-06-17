import {Component} from "react";


class TransFormClassProperties extends Component {
    state = {
        username: '',
        message: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert('이름:' + this.state.username + '\n메세지:' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    };

    render() {
        return (
            <div>
                <h1>이벤트 </h1>
                <input
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            this.handleClick();
                        }
                    }}
                    value={this.state.message} name='message' placeholder='메세지' onChange={e => this.handleChange(e)}/>

                <input
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            this.handleClick();
                        }
                    }}
                    value={this.state.username} name='username' placeholder='유저네임'
                    onChange={e => this.handleChange(e)}/>


            </div>
        )
    }
}


export default TransFormClassProperties;