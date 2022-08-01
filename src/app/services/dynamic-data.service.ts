import { Injectable } from '@angular/core';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DynamicDataService {

  dataMap = new Map<string, string[]>([
    ["Bebidas", ["Gaseosas"]],
    ["Gaseosas",["Con alcohol", "Sin Alcohol"]],
    ["Sin Alcohol",["Con azucar", "Sin azucar"]],
    ["Sin azucar",["Jugos","Energizantes"]],
    ["Energizantes",["Fruta"]],
    ["Fruta",["Sin grasa"]],
  ]);

  firstLevel: string[] = ["Bebidas", "Comidas", "Limpieza"];

  getChildren(children: string) {
    return of(this.dataMap.get(children));
  }

  isExpandable(children: string): boolean {
    return this.dataMap.has(children);
  }

  constructor() { }


}
