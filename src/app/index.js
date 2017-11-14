import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
    render(){
        let user_info = {
            user_name: "Ahmad Irfan Mohammad Shukri",
            user_age: 30,
            user_job_title: "Fullstack Web Developer",
            user_hobbies: ["playing guitar", "watch movies", "playing mobile games", "hacking"]
        };

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            title="User Information"
                            user_name={user_info.user_name}
                            initial_user_age={user_info.user_age}
                            user_job_title={user_info.user_job_title}
                            user_info={user_info}
                        >
                            <p>This is the Home paragraph!</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));