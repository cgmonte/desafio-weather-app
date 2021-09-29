import React from "react";

class WeatherCard extends React.Component {




    goBack() {
        window.history.back();
    }

    render() {
        return (
            <div>

                <button onClick={() => window.history.back()}>
                    Voltar
                </button>

                {this.props.city_name.toUpperCase()}

            </div>
        );
    }
}

export default WeatherCard