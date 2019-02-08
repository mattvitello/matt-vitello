import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeImage();
  }

  //change image on homepage
  changeImage(): void{
    var images = ['#img1', '#img2', '#img7', '#img4', '#img5', '#img6', '#img3', '#img8'];
    $(document).mousemove(function (e) {
      var item = $('.slider>div.show');
      var index = images.indexOf('#' + $(item).attr('id'));
      setTimeout(function () {
        var next = index + 1;
        if (index === images.length - 1) {
          next = 0;
        }
        $(images[index]).removeClass().addClass('hide');
        $(images[next]).removeClass().addClass('show');
      }, 100);
    });
  }

}
