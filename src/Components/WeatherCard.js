import React from "react";

class WeatherCard extends React.Component {
    componentDidMount() {
        this.props.apiResponses.forEach(element => {
            // console.log(element)
        });        
    }

    render() {
        return (
            <div>
                {/* {this.props.} */}
                O que será?
            </div>
        );
    }
}

export default WeatherCard