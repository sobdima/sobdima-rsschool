import { initRouter } from './router/router';
import { connect } from './api/ws';
import './styles/main.scss';

connect('ws://localhost:4000/');

initRouter();
