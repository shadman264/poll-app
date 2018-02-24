import React, { Component } from 'react';
import mockResponse from '../data';
import { Container } from 'reactstrap';

import PollResult from './PollResult';
import FormComponent from './FormComponent';

export default class Poll extends Component {

    constructor(props){
        super();
        this.state = {
            isSubmitted: false,
            selectedOption: ''
        }
        this.selectedQuestionIndex = Math.floor(Math.random() * mockResponse.questions.length);
    }

    selectedOption(option){
        console.log(option);
        this.setState({isSubmitted: true, selectedOption: option});
    }

    render() {
        let element;
        if(!this.state.isSubmitted){
            element =
                <FormComponent question={mockResponse.questions[this.selectedQuestionIndex]}
                    selectedOption={this.selectedOption.bind(this)}/>
        }
        else{
            element = <PollResult selectedOption={this.state.selectedOption}
                        data={mockResponse.questions[this.selectedQuestionIndex].answers} />
        }
        return (
            <Container style={{marginTop: '5%'}}>
                {element}
            </Container>
        )
    }


}
