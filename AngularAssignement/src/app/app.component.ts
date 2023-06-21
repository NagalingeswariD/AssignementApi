import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public students?: Student[] = undefined;
  
  constructor(http: HttpClient) {
    http.get<Student[]>('https://localhost:44351/Student').subscribe(result => {
      this.students = result;
    }, error => console.error(error));
  }

  title = 'AngularAssignement';
}

interface Student {
  name: string;
  age: number;
  hobbies: string[];
}
