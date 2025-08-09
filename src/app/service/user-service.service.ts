import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user-interface/user-interface.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private listSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    { id: 1, nome: 'Ana Beatriz Oliveira', email: 'ana.b.oliveira@example.com', sexo: 'Feminino' },
    { id: 2, nome: 'Lucas Martins Silva', email: 'lucas.silva@example.com', sexo: 'Masculino' },
    { id: 3, nome: 'Fernanda Costa Lima', email: 'fernanda.lima@example.com', sexo: 'Feminino' },
    { id: 4, nome: 'Rafael Souza Mendes', email: 'rafael.mendes@example.com', sexo: 'Masculino' },
    { id: 5, nome: 'Juliana Rocha Vieira', email: 'juliana.vieira@example.com', sexo: 'Feminino' },
  ]);

  public listRegister$:Observable<User[]> = this.listSubject.asObservable();

  private personDataViewSubject:BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  public personDataView$:Observable<User | undefined> = this.personDataViewSubject.asObservable();

  private personUpdateSubject:BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  public personUpdateDate$:Observable<User | undefined> = this.personUpdateSubject.asObservable();

  registerPerson(user:User){
     const currentList:User[] = this.listSubject.getValue();

     const lastId = currentList.length + 1; //Essa lógica é para pegar o número do tamanho do array para por como id automático para registro de um novo usuário.

     user.id = lastId;

     const newList:User[] = [...currentList, user];

     this.listSubject.next(newList);
  }

  removePerson(user:User | undefined){
    const currentList:User[] = this.listSubject.getValue();

    const newList:User[] = currentList.filter(users => users !== user);

    this.listSubject.next(newList);
  }

  sendDataView(user:User | undefined){
    this.personDataViewSubject.next(user);
  }

  sendData(user:User | undefined){
     this.personUpdateSubject.next(user);
  }

  updatePerson(user:User){
    const currentList = this.listSubject.getValue();
    const personData = this.personUpdateSubject.getValue();

    const updateList = currentList.map(person => 
      person.id === personData?.id ? person = user : person
    );

    this.listSubject.next(updateList);
  }
}
