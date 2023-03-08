import { Component } from '@angular/core';
import { Observable, interval, filter, take, map } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent {

  /* constructor(){
    let numero = 0;

   const miObservable = new Observable<number>((observer) => {

      setInterval(() => {
        console.log(numero)
        numero++
        observer.next(numero)
        observer.complete()
        if(numero == 5){
          observer.error('Numero Erroneoo');

        }
      }, 1000)
    });
    miObservable.subscribe({
      next: (result) => {
      result
    },
    error: (error) => {
      console.error('>>>>>' + error(error) + '<<<<<<')
    },
    complete: () => {
      console.info('Observable completado')
    }
}
    );
  } */

  miIntervalo: Observable<number> = interval(2000).pipe(
  map(value => value + 1),
  filter((value) => value % 2 == 0),
  take(5));
  constructor(){}

  ngOnInit(): void{
    this.miIntervalo.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Intervalo terminado'),
    });
  }

}
