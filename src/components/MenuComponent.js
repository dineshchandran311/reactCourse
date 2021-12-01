import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const menu = this.props.dishes.map( (dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle><h4>{dish.name}</h4></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;