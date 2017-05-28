import React from "react";

export default class Book extends React.Component {

    render() {
        const {id, title, isNew} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{title} {isNew === true && <span style={{"color":"red"}}>New Arrival !</span>}</td>
            </tr>
        );
    }
}
