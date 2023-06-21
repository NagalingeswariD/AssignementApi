import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BehaviorSubject<GridDataResult> {  
  private BASE_URL: string = 'https://localhost:44351/Student';  
  httpClient: any;
    

   

  public query(): void {  
      this.getEmployee()  
          .subscribe(x =>   
              super.next(x));  
  }  

    
  private getEmployee(): Observable<GridDataResult>{  
      return this.httpClient  
          .get(`${this.BASE_URL}`)  
          .map(response => response.json())  
          .map(response => (<GridDataResult>{  
              data: response,  
              total: parseInt(response.length,10)  
          }));  
        
  }  
    
}
