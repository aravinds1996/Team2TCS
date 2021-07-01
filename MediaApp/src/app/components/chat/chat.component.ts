import { Component, OnInit } from '@angular/core'
import { ChatService } from 'src/app/services/chat.service'
import {io} from 'socket.io-client'
import { Message } from 'src/app/models/message'
const SOCKET_ENDPOINT = 'localhost:3000'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  username: string = ""
  message: Message = {username: this.username, body: ""}
  messageList: Message[] = []
  socket: any

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();

  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT)
    this.socket.on('message-broadcast', (data: any) => {
      if (data) {
        console.log(data)
        this.messageList.push(data)
      }
    })
  }

  SendMessage() {
    this.message.username = this.username
    this.messageList.push(this.message)
    this.socket.emit('message', this.message);
    console.log(this.messageList)
    this.message = {username: this.username, body:""};
 }

}
