import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _socket: Socket) { }

  public sendMessage(message: string) {
    this._socket.emit('new-message', message);
  }

  public getMessages = () => {
    return new Observable((observer: Observer<string>) => {
      this._socket.on('new-message', (message: string) => {
          observer.next(message);
      });
    })
  }
}

