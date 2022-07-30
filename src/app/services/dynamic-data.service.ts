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

  rootLevelNodes: string[] = ["Bebidas", "Comidas", "Limpieza"];

  getChildren(node: string) {
    return of(this.dataMap.get(node));
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }

  constructor() { }


}
