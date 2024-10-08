import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { setTimeout } from 'node:timers/promises';


@Component({
  selector: 'shared-lazy-image',
  templateUrl:'./lazy-Image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit {

  @Input()
    public url?:string;


  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;


  ngOnInit(): void {

    if ( !this.url ) throw new Error(' URL property is required ');
  }


  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);

  }

}
