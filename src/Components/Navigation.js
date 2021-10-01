import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => window.history.back()}>
                    Voltar
                </button>
            </div>
        );
    }
}

export default Navigation