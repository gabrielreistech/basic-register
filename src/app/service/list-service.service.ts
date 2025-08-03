import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user-interface/user-interface.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private listSubject:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([{nome:'Debora Cristina dos Santos Ferreira', email:'deboraantunes1411@gmail.com', sexo:'Feminino'}]);
  public listRegister$:Observable<User[]> = this.listSubject.asObservable();

  registerPerson(user:User){
     const currentList:User[] = this.listSubject.getValue();

     const newList:User[] = [...currentList, user];

     this.listSubject.next(newList);
  }

  removePerson(user:User | undefined){
    const currentList:User[] = this.listSubject.getValue();

    const newList:User[] = currentList.filter(users => users !== user);

    this.listSubject.next(newList);
  }

}
