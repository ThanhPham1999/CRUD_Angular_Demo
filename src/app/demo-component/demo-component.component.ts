import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUserInfo, TUserInfo} from "../interface/demo.interface";

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrl: './demo-component.component.css'
})
export class DemoComponent {
  products!: TUserInfo[];
  clonedProducts: { [s: string]: TUserInfo } = {};

  @Input() listData: TUserInfo[] = []
  @Output() onAddData: EventEmitter<IUserInfo> = new EventEmitter<IUserInfo>()
  @Output() onDeleteData: EventEmitter<number> = new EventEmitter<number>()
  @Output() onUpdateData: EventEmitter<TUserInfo> = new EventEmitter<TUserInfo>()

  formAddition: TUserInfo = {
    id: 0,
    name: '',
    age: '',
    nationality: ''
  }

  handleAdd(): void {
    this.onAddData.emit(this.formAddition)
  }

  handleDelete(id: number): void {
    this.onDeleteData.emit(id)
  }

  handleEdit(data: TUserInfo): void {
    this.formAddition = data
  }

  handleUpdate(): void {
    this.onUpdateData.emit(this.formAddition)
    this.formAddition = {
      id: 0,
      name: '',
      age: '',
      nationality: ''
    }
  }

  onRowEditCancel(product: TUserInfo, index: number) {
    this.products[index] = this.clonedProducts[product.id as unknown as string];
    delete this.clonedProducts[product.id as unknown as string];
  }
}
