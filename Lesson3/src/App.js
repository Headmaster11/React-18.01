import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

class App extends Component {
    render() {
        const menuItems = [
            {href:"/", title: "Главная"},
            {href:"/about", title: "О нас"},
            {href:"/service", title: "Услуги"},
            {href:"/contacts", title: "Контакты"}
        ]

        return <div>
            <h1>Первое приложение на React</h1>
            <p>Hello React!</p>
            <a>Ссылка</a>
            <Menu titleMenu="Основное меню сайта" items={menuItems}/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));