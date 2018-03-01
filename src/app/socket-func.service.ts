import * as io from 'socket.io-client';

export class SocketFuncService {
  private url = "192.168.12.16:3030";
  private socket;

  constructor() {
    this.socket = io(this.url);
  }
  public loginUser(user) {
    this.socket.emit('login_user', user);
  }

}
