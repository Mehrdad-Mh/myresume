import React from "react";
import App from './App';
import  ReactDOM  from 'react-dom';
import {ThemeProvider} from './Context';


ReactDOM.render(
<ThemeProvider>
<App/>
</ThemeProvider>
    
    ,document.getElementById('root')

);