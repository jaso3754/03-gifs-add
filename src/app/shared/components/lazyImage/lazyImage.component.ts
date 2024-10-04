import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl:'./lazyImage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {

@Input()
  public url?:string;


@Input()
public alt: string = '';


ngOnInit(): void {

  if ( !this.url ) throw new Error(' URL property is required ');
}


 }
