import React from 'react';

export default class Home extends React.Component {
    render(){
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
                        <strong>Address:</strong> {this.props.user_address}
                    </p>
                    <p>
                        <strong>Job Title:</strong> {this.props.user_job_title}
                    </p>
                    <p>
                        <strong>Email Address:</strong> {this.props.user_email}
                    </p>
                </div>
            </div>
        );
    }
}