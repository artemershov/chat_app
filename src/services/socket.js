import io from 'socket.io-client';

const socketService = {
  instance: null,
  getInstance: () => {
    if (socketService.instance) {
      return socketService.instance;
    } else {
      return socketService.connect();
    }
  },
  init: (events = []) => {
    socketService.getInstance();
    if (events.length) {
      events.forEach(({ event, callback }) =>
        socketService.addEvent(event, callback)
      );
    }
  },
  connect: () => {
    const socket = io('http://localhost:5000/');
    socketService.instance = socket;
    return socket;
  },
  disconnect: () => {
    const socket = socketService.getInstance();
    socket.disconnect();
    socketService.instance = null;
  },
  emit: (event, payload) => {
    const socket = socketService.getInstance();
    socket.emit(event, payload);
  },
  addEvent: (event, callback) => {
    const socket = socketService.getInstance();
    socket.on(event, callback);
  }
};

export default socketService;
