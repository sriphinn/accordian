import React from 'react';

export default class Accordian extends React.Component {
    state = {
        currentIndex: null
    }

    changeTab(index){
        this.setState({
            currentIndex: index
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <ul>
                    {this.props.sections.map((section, index) => (
                        <li>
                            <button onClick={e=>this.changeTab(index)} >{section.title}</button>
                            {index == this.state.currentIndex ? (<p>{section.content}</p>): null}
                        </li>
                    ))}                    
                </ul>
            </div>
        )
    }
}

Accordian.defaultProps = {
    sections: []
}
