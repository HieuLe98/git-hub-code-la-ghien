import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'Đạt Colin';
  public age = 25;
  public oldLove = [
    {name: 'Khuê', year: 1998, checked: true},
    {name: 'Thoa', year: 2001, checked: true},
    {name: 'Mai', year: 1998, checked: true},
    {name: 'Nguyệt', year: 2002, checked: false}
  ];

  public vietNamData = [
    {city: 'Chọn Tỉnh / Thành Phố', district: ['Quận / Huyện']},
    {city: 'An Giang', district: ['Thành phố Châu Đốc', 'Thành phố Long Xuyên', 'Thị xã Tân Châu']},
    {city: 'Bạc Liêu', district: ['Thành phố Bạc Liêu', 'Thị xã Giá Rai', 'Huyện Đông Hải']},
    {city: 'Hà Nội', district: ['Ba Đình', 'Đống Đa', 'Hoàn Kiếm', 'Hai Bà Trưng']}
  ];

  public districts: any = ['Quận / Huyện'];

  constructor(private common: CommonService) { }
  public counter = 0;
  public counterBinhPhuong = 0;
  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public resetName() {
    this.name = '';
  }

  public changeCity(event: any) {
    const city = event.target.value;
    const search = this.vietNamData.filter(data => data.city === city);

    if (search)
    {
      this.districts = search[0].district;
    }
  }
}
