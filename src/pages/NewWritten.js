import React, { Component } from 'react';

import './styles/NewWritten.css';

//Components
import Footer from '../components/Footer';

const URL_BASE = 'https://backletras.herokuapp.com/letras';


class NewWritten extends Component {
    state = {
        down: true,
        form: {
            title: '',
            text: ''
        }
    };

    fetchData = async (url, _data) => {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(_data)
            });
            const data     = await response.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.fetchData(`${URL_BASE}/newWriting`, this.state.form);
        //Envío de datos
    };

    handlechange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        });
    };

    render(){
        return(
            <div className="newWritten">
                <form onSubmit={this.handleSubmit} className="newWritten-form">
                    <div className="newWritten-form--container">
                        <label className="newWritten-form-container--label">
                            Tu nueva experiencia
                        </label>
                        <div className="newWritten-form-container--input __heigh">
                            <input 
                                type="text"
                                name="title"
                                placeholder="titulo"
                                onChange={this.handlechange}
                            />
                        </div>
                    </div>
                    <div className="newWritten-form--container">
                        <label className="newWritten-form-container--label">
                            ¿Cómo sucedió?
                        </label>
                        <div className="newWritten-form-container--input">
                            <textarea
                                className="newWritten-form-container--textarea"
                                name="text"
                                placeholder="algo increible empezará"
                                onChange={this.handlechange}
                            ></textarea>
                        </div>
                    </div>
                    <button className="newWritten-form--button">
                        Guardar
                    </button>
                </form>
                <Footer down={this.state.down} />
            </div>
        );
    }
}

export default NewWritten;
