import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InicioPage implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;

  config : SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true
  };
  constructor() { }

  ngAfterContentChecked() {
    if (this.swiper){
      this.swiper.updateSwiper({});
    }
     
  } 
}