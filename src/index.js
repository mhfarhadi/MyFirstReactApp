import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorker from './ServiceWorker';

// const root = ReactDOM.createRoot(document.getElementById('root'));

  
setInterval(() => {
      let element = (
        <div>
          <h1>Hello roocket</h1>
          <p>it is {new Date().toLocaleString()}</p>
        </div>
      )

      ReactDOM.render(element, document.getElementById('root'));
    },1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ServiceWorker.unregister();
