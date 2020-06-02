import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-leader';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBCqZx8vD7Tj1GZ3Q_pMmaq4nyhGYlVtqo',
      authDomain: 'my-project-leader.firebaseapp.com',
      databaseURL: 'https://my-project-leader.firebaseio.com',
      projectId: 'my-project-leader',
      storageBucket: 'my-project-leader.appspot.com',
      messagingSenderId: '90806017030',
      appId: '1:90806017030:web:05089ae1c16d682ac17787',
      measurementId: 'G-6B1S81R6Y5'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
