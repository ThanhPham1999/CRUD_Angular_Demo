import {Component, OnInit} from '@angular/core';
import {IUserInfo, TUserInfo} from "./interface/demo.interface";
import {DemoService} from "./service/demo-service.service";
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  listData: TUserInfo[] = []

  constructor(private demoService: DemoService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.handleGetListData();
    this.primengConfig.ripple = true;
  }

  handleGetListData(): void {
    // @ts-ignore
    this.demoService.getData().subscribe((res: TUserInfo[]) => {
      this.listData = res
    })
  }

  handleAdd(data: IUserInfo): void {
    this.demoService.addData(data).subscribe(() => {
      this.handleGetListData()
    })
  }

  handleDelete(data: number): void {
    this.demoService.deleteData(data).subscribe(() => {
      this.handleGetListData()
    })
  }

  handleUpdate(data: TUserInfo): void {
    this.demoService.updateData(data).subscribe(() => {
      this.handleGetListData()
    })
  }
}
