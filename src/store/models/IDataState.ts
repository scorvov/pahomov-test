export interface IDataState {
  products: IProduct[];
}

interface IProduct {
  name: string;
  number: string;
  unitPrice: number;
  cost: number;
}
