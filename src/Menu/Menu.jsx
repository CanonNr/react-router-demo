import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
               
                <ListGroup as="ul">
                    <ListGroup.Item as="li">
                        <Link to="/home"> Home</Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Link to="/about"> About </Link>
                    </ListGroup.Item>
                </ListGroup>
               
            
            </div>
        );
    }
}