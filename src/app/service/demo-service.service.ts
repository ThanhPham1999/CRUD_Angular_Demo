import {Injectable} from '@angular/core';


import {IUserInfo, TUserInfo} from "../interface/demo.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DemoService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<TUserInfo[]> {
    return this.http.get<TUserInfo[]>('https://server-deployment-yvii.onrender.com/todo')
  }

  addData(data: IUserInfo): Observable<TUserInfo> {
    return this.http.post<TUserInfo>('https://server-deployment-yvii.onrender.com/todo', data);
  }

  deleteData(data: number): Observable<TUserInfo> {
    return this.http.delete<TUserInfo>(
      `https://server-deployment-yvii.onrender.com/todo/${data}`
    )
  }

  updateData(data: TUserInfo): Observable<TUserInfo> {
    return this.http.put<TUserInfo>(
      `https://server-deployment-yvii.onrender.com/todo/${data.id}`, {
        age: data.age,
        name: data.name,
        nationality: data.nationality
      }
    );
  }
}
