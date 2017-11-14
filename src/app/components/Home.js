import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
    constructor(props){
        super();

        this.state = {
            user_age: props.initial_user_age,
            status: 0
        };
    }

    onMakeOlder(){
        this.setState({
            user_age: this.state.user_age + 1
        });
    }

    onMakeYounger(){
        this.setState({
            user_age: this.state.user_age - 1
        });
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <div>
                        <strong>Name:</strong> {this.props.user_name}
                    </div>
                    <div>
                        <strong>Age:</strong> {this.state.user_age}
                    </div>
                    <div>
                        <strong>Job:</strong> {this.props.user_job_title}
                    </div>
                    <div>
                        <strong>Hobbies:</strong>
                        <ul>
                            {this.props.user_info.user_hobbies.map((user_hobby, index) => <li key={index}>{user_hobby}</li>)}
                        </ul>
                    </div>
                    <div>
                        <strong>Status:</strong>
                        {this.state.status}
                    </div>
                    <div>
                        <button onClick={() => this.onMakeOlder()} className="btn btn-primary btn-lg">Make me older!</button>
                        <button onClick={() => this.onMakeYounger()} className="btn btn-warning btn-lg">Make me younger!</button>
                    </div>
                </div>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    user_name: PropTypes.string,
    user_age: PropTypes.number,
    user_job_title: PropTypes.string,
    user_hobbies: PropTypes.string,
    children: PropTypes.element.isRequired
}