import React from 'react'


class UserOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Hogan",
            email: "hoganlin.tech@gmail.com",
            country: "Taiwan"
        }
    }
}

<button onClick={() => this.setState({ userName: "Bobo" })}>Change Name to BOBO</button>