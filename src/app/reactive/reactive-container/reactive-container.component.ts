import { Component, OnInit, OnDestroy  } from '@angular/core';
import { fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {

subscriptor: Subscription | null = null;

x: number = 0;
y: number = 0;


  ngOnInit(){

    const obs = fromEvent<MouseEvent>(document.querySelector('#area')!, 'mousemove');

   this.subscriptor =  obs.subscribe((e) => {
      console.log(this.x)
      console.log(this.y)
      console.log(e)
      this.x = e.clientX;
      this.y = e.clientY;
    });
  }

  ngOnDestroy(){
    this.subscriptor?.unsubscribe();
  }

  /*  constructor(){
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
  }

  miIntervalo: Observable<number> = interval(2000).pipe(
  map(value => value + 1),
  filter((value) => value % 2 == 0),
  take(5));

miSubcripcion: Subscription | null = null;

  constructor(){}

  ngOnInit(): void{
     this.miSubcripcion = this.miIntervalo.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Intervalo terminado'),
    });
    console.log('COMPONENTE FUNCIONANDO')
  }


  ngOnDestroy(){
    this.miSubcripcion!.unsubscribe();
console.log('COMPONENTE DESTRUIDO')
  } */

}
