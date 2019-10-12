import { IDataState } from "../models/IDataState";

const dataState: IDataState = {
  products: [
    {
      name: "SHINGLAS многослойная черепица, Ранчо, Коричневый, 2 м2",
      number: 78,
      unitPrice: 589,
      cost: 45471
    },
    {
      name: "Черепица конька/карниза  (уп. 12 п.м / 20 п.м)",
      number: 3,
      unitPrice: 4988,
      cost: 13717
    },
    {
      name: "Планка карниза, 2 м",
      number: 15,
      unitPrice: 595,
      cost: 8925
    },
    {
      name: "Планка ветровая, 2 м",
      number: 10,
      unitPrice: 780,
      cost: 7800
    },
    {
      name: "Ковер подкладочный, рулон 15 м2",
      number: 11,
      unitPrice: 3829,
      cost: 39439
    },
    {
      name: "Лист OSB, 2500×1250×9 мм",
      number: 54,
      unitPrice: 715,
      cost: 38057
    },
    {
      name: "Аэратор коньковый AIRIDGE FELT",
      number: 26,
      unitPrice: 350,
      cost: 9052
    },
    {
      name: "Вентилятор скатный Huopa KTV",
      number: 3,
      unitPrice: 1050,
      cost: 3150
    },
    {
      name: "Мастика битумная, 3 л",
      number: 4,
      unitPrice: 2380,
      cost: 7355
    },
    {
      name: "Гвозди кровельные ершеные (упаковка 5 кг)",
      number: 4,
      unitPrice: 750,
      cost: 2318
    }
  ]
};
// альтернатива cost -  number*unitPrice несложные вычисления в UI

export const dataReducer = (state = dataState, action: any) => {
  switch (action.type) {
    case "SOME_ACTION":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
