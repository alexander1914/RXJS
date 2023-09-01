import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit {  
  
  title = 'RXJS';

  // Promises: é um objeto usado para realizar processamentos assíncronos, 
  // esse objeto guarda um valor que pode estar disponível.
  
  minhaPromise(nome: string): Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome === 'Alexander'){
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 1000);
      }
      else{
        reject('Ops! Você não é o Alexander');
      }
    })
  }

  // Observable: é um objeto de coleção que funciona de forma unidirecional, ou seja, 
  // ele emite notificações sempre que ocorre uma mudança em um de seus itens 
  // e a partir disto podemos executar uma ação.
  
  minhaObservable(nome: string): Observable<string>{
    return new Observable(subscriber => {
      
      if(nome === 'Alexander'){
        subscriber.next('Welcome ' + nome);
        subscriber.next('Angular na Veia !');
        setTimeout(() => {
          subscriber.next('Resposta com delay... ' + nome)
        }, 1000)
      }
      else{
        subscriber.error('Ops! Deu error..');
      }
            
    })
  }

  // ngOnInit: é primeiro método que será chamado pelo construtor
  
  ngOnInit(): void {
    // Testando a promise()
    /* this.minhaPromise('Alexander')
    .then(result => console.log(result)); */

    /* this.minhaPromise('Cride')
    .then(result => console.log(result))
    .catch(erro => console.log(erro)) */

    // Testando Observable()
    this.minhaObservable('Alexander')
      .subscribe(
        result => console.log(result),
        erro => console.log(erro));      
  }

}
