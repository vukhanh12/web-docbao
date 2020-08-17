import React,{Component} from 'react'
import App from '../App.js'

import {Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import Paper from '../pages/Paper.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


  const Index = () => <h2>Hello</h2>
class Products extends Component{
  constructor(props){
    super(props);
    this.viewPaper = this.viewPaper.bind(this)
    this.state={
      lpath:'/'
    }
  }
  viewPaper(item){
    const path=item.split(' ').join('-');
    this.setState({
      lpath:'/'+path
    })
    console.log(this.state.lpath)
  }
  render(){
    const {products} = this.props;
    const sm = 3;
        return(
            <Container>
                <Row>
                    {
                        products.map(item=>{
                          return<Col sm={sm}>
                            <Card onClick={()=>this.viewPaper(item.description)
                            }>
                            <Link to={this.state.lpath}>Click</Link>
                            <CardImg top width="100%" src={item.imageUrl}/>
                            <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        })
                    }
                </Row>
            </Container>
        )
      }
}
export default Products;