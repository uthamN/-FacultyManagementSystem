import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./icon.css";

class Icon extends Component{
    constructor(){
        super()
        this.state = {
            color : "#32398B"
        }
        
    }

    render(){
        return(
            <div className="outer-outer">
                <div className="outer">
                    <div className="inner-top">
                        <div className="inner-inner">
                            {/* <img src={this.props.image} alt = {this.props.title} className="innerImg"/> */}
                            <FontAwesomeIcon icon={this.props.icon} size="5x" color={this.state.color} />
                        </div>
                    </div>
                    <div className="inner-bottom h5">
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default Icon;