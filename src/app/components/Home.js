import React from 'react';

export default class Home extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h2>{this.props.title}</h2>
                <div>
                    <p>
                        <strong>Name:</strong> {this.props.user_name}
                    </p>
                    <p>
                        <strong>Age:</strong> {this.props.user_age}
                    </p>
                    <p>
                        <strong>Job:</strong> {this.props.user_job_title}
                    </p>
                    <div>
                        <strong>Hobbies:</strong>
                        <ul>
                            {this.props.user_info.user_hobbies.map((user_hobby) => <li>{user_hobby}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}