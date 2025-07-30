import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user-interface/user-interface.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private listSubject:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public listRegister$:Observable<User[]> = this.listSubject.asObservable();

  adicionarPessoa(user:User){
     const currentList:User[] = this.listSubject.getValue();

     const newList:User[] = [...currentList, user];

     this.listSubject.next(newList);
  }

}
