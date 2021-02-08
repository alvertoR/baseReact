import React, { Component } from 'react';

//Components
import Writing from '../components/Writings';
import Footer  from '../components/Footer';


const URL_BASE = 'https://backletras.herokuapp.com/letras';

class Written extends Component{

    constructor(props){
        super(props);
        this.state = {
            data:[],
            idWriting: props.idWriting
        }
    } 
    
    fetchData = async (url) => {
        try{
            const response = await fetch(`${url}`)
            const data     = await response.json();
            this.setState({
                data: data.data,
                loading: false
            })
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.timeoutId = this.fetchData(`${URL_BASE}/writing/${this.props.match.params.id}`);
    }

    componentWillUnmount(){
        clearTimeout(this.timeoutId);
    }

    render(){
        return(
            <div className="written">
                <Writing
                    data={this.state.data}
                />
                <Footer />
            </div>
        );
    }
}

export default Written;