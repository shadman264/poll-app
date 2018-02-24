import React from 'react';
import { Card, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import BarChart from 'react-bar-chart';

export default class PollResult extends React.Component{

    constructor(props){
        super(props);
        this.data = [];
        let that = this;
        this.props.data.map((answer)=>{
            if(answer.text!==that.props.selectedOption){
                let ans = {
                    text: answer.text,
                    value: answer.responses
                };
                that.data.push(ans);
            }
        });
        this.margin = {top: 20, right: 20, bottom: 30, left: 40};
    }

    render(){

        return(
            <Card style={{padding: '2%'}}>
                <FormText color="muted">You selected:</FormText>
                <Breadcrumb>
                    <BreadcrumbItem>{this.props.selectedOption}</BreadcrumbItem>
                </Breadcrumb>
                <legend style={{color: 'blue'}}>Other Responses</legend>

                <BarChart ylabel='Responses'
                    width={800}
                    height={400}
                    margin={this.margin}
                    data={this.data}/>
            </Card>
        )
    }
}
