import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages
import Landing    from '../pages/Landing';
import Written    from '../pages/Written';
import NewWritten from '../pages/NewWritten';
import Login      from '../pages/Login';
import NotFound   from '../pages/NotFound';
 
function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/written/:id/write" component={Written} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/newWritten" component={NewWritten} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;