import 'normalize.css';
import './styles/style.less';

window.blurMe = () => {
    document.body.classList.add('blur-it');
};

window.evenMore = () => {
    document.body.classList.add('blur-it-even-more');
};

window.tooMuch = () => {
    document.body.classList.remove('blur-it');
    document.body.classList.remove('blur-it-even-more');
}