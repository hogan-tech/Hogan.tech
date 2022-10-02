import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa'


const Star = ({ selected = true }) => (
    <FaStar color={selected ? 'red' : 'gray'}></FaStar>
)



export default class StarRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starSelected: 0
        };
        this.change = this.change.bind(this);
    }

    change(starSelected) {
        this.setState({ starSelected });
    }

    render() {
        const { totalStars } = this.props;
        const { starSelected } = this.state;
        return (
            <div>
                {[...Array(totalStars)].map((n, i) => {
                    return (
                        <Star
                            key={i}
                            selected={i < starSelected}
                            onClick={() => this.change(i + 1)}
                        />
                    )
                })}
                <p>
                    {starSelected} of {totalStars} stars
                </p>
            </div>
        )
    }
}

