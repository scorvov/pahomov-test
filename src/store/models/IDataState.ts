export interface IDataState {
  products: IProduct[];
}

interface IProduct {
  name: string;
  number: number;
  unitPrice: number;
  cost: number;
}
