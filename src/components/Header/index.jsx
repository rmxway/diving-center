import { Button } from '../ui';
import './style.css';

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <a href="#" className="logo">
                        <img src="img/logo.svg" alt="logo" />
                        <div>
                            <span>Глубина</span>
                            Дайвинг-центр
                        </div>
                    </a>
                    <nav>
                        <a href="#services">Услуги</a>
                        <a href="#text-us">Напишите нам</a>
                        <a href="#locations">Локации</a>
                        <a href="#contacts">Контакты</a>
                    </nav>
                </div>
            </div>
            <div></div>
            <div className="container">
                <div className="hero">
                    <h1>Там, где заканчивается суша — начинается твоё приключение</h1>
                    <p>
                        Дайвинг-центр с сертифицированными инструкторами. <br />
                        Обучение, погружения, экспедиции — для новичков и профи.
                    </p>
                    <Button inline>Записаться на погружение</Button>
                </div>
            </div>
        </header>
    );
};
