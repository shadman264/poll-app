import React from 'react';
import { Card, Form, FormGroup, Label, Input, FormText, Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

export default class FormComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            selectedOption: '',
            showModal: false
        }
    }

    handleOptionSelect(option){
        this.setState({selectedOption: option})
    }

    formSubmit(){
        if(this.state.selectedOption!=='')
            this.props.selectedOption(this.state.selectedOption);
        else{
            this.setState({showModal: true})
        }
    }

    hideModal(){
        this.setState({showModal: false});
    }

    render(){
        let data = this.props.question;
        let that = this;
        let radioOptions = data.answers.map((ans)=>{
            return (
                <FormGroup check key={ans.id} onChange={that.handleOptionSelect.bind(that, ans.text)}>
                    <Label check>
                        <Input type="radio" name="radio1"/>{' '}
                        {ans.text}
                    </Label>
                </FormGroup>
            )
        })
        return(
            <Card style={{padding: '2%'}}>
                <Form>
                    <Modal isOpen={this.state.showModal}>
                        <ModalHeader>
                            Please Select One Option
                        </ModalHeader>
                        <ModalFooter>
                        <Button color="danger" onClick={this.hideModal.bind(this)}>OK</Button>{' '}
                        </ModalFooter>
                    </Modal>
                    <FormGroup>
                        <FormText color="muted">Please answer the following question: </FormText>
                        <legend>{data.text} ?</legend>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                        {radioOptions}
                    </FormGroup>
                    <Button color="success" onClick={this.formSubmit.bind(this)}>Submit</Button>
                </Form>
            </Card>
        )
    }
}
