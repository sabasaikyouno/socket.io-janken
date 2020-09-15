'use strict';
const loadavg = $('#loadavg');
const $ = require('jquery');
import io from 'socket.io-client';
const socket = io('http://localhost:8000');
socket.on('server-status', (data) => {
  loadavg.text(data.loadavg.toString());
});