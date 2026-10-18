import './style.css';

export const Footer = () => {
    return (
        <footer id="contacts">
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
                <div className="contacts">
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <div>Москва, ул. Погружений дом 17 студия / бассейн для тренировок</div>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <div>mailus@deepdiving.ru</div>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <div>+7 (996) 000 - 89 - 32</div>
                        </li>
                    </ul>
                    <div className="socials">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-vk"></i>
                        <i className="fab fa-telegram-plane"></i>
                        <i className="fab fa-vimeo-v"></i>
                    </div>
                </div>
                <p className="rights">Все права защищены. Дайвинг-центр | 2026</p>
            </div>
            <img src="img/korall-1.png" className="korall-1" alt="Кораллы" />
            <img src="img/korall-2.png" className="korall-2" alt="Песок" />
            <div className="lines-wrapper">
                <img src="img/logo.svg" className="logo-lines" alt="logo" />
            </div>
        </footer>
    );
};
