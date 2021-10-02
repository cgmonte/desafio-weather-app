import React from "react";

export const ReactIcon = (Icon) => {

  return class extends React.Component {
    render() {
      return (
        <div>
          <Icon />
        </div>
      )
    }
  }
}