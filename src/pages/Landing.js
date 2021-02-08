import React, { Component } from 'react';

//Styles
import './styles/Landing.css';

//components
import CardList from '../components/CardList';
import Footer   from '../components/Footer';
import Skeleton from '../components/Skeleton';

const URL_BASE = 'https://backletras.herokuapp.com/letras';

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null,
        }
    }

    fetchData = async (url) => {
        try{
            const response = await fetch(`${url}/writings`);
            const data     = await response.json();
            this.setState({
                loading: false,
                data: data.data
            });
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.timeoutId = this.fetchData(URL_BASE);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId)
    }

    render(){
        return(
            <div className="landing">
                <h1 className="landing-title">Letras</h1>
                {this.state.loading && (
                    <Skeleton />
                )}
                {!this.state.loading && (
                    <CardList writings={this.state.data} />
                )}
                <Footer />
            </div>
        );
    }
};

export default Landing;