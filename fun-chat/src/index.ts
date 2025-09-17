import { initRouter } from './router/router';
import { connect } from './api/ws';
import './global.css';

connect('ws://localhost:4000/');

initRouter();
