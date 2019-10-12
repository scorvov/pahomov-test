import React from "react";
import { IDataState } from "../../store/models/IDataState";
import close from "./../../assets/svg/close.svg";
import {
  ContainerProducts as Container,
  Table,
  Header,
  RowHead,
  RowBody,
  Cell,
  CellHeader,
  CellHeaderMob,
  CellImage,
  CellEnd,
  Image,
  RowMob
} from "../../styled-components";

export const ProductsView: React.FC<IDataState> = ({ products }) => {
  return (
    <Container>
      <Table>
        <Header>Результаты расчёта</Header>
        <RowHead>
          <CellImage width={"5%"} />
          <CellHeader width={"52%"} align={"start"}>
            Наименование
          </CellHeader>
          <CellHeader width={"10%"}>Кол-во</CellHeader>
          <CellHeader width={"14%"}>Цена за ед, ₽ </CellHeader>
          <CellHeader width={"14%"}>Стоимость, ₽</CellHeader>
          <CellImage width={"5%"} />
        </RowHead>
        {products
          ? products.map(({ name, number, unitPrice, cost }, index) => (
              <RowBody key={name}>
                <CellImage width={"5%"}>
                  <Image
                    src={require(`../../assets/images/image${index}.png`)}
                    alt={"img"}
                  />
                </CellImage>
                <RowMob width={"52%"}>
                  <CellHeaderMob width={"52%"}>Наименование</CellHeaderMob>
                  <Cell align={"start"}>{name}</Cell>
                </RowMob>
                <RowMob width={"10%"}>
                  <CellHeaderMob width={"10%"}>Кол-во</CellHeaderMob>
                  <Cell>{number}</Cell>
                </RowMob>
                <RowMob width={"14%"}>
                  <CellHeaderMob width={"14%"}>Цена за ед, ₽ </CellHeaderMob>
                  <Cell>{unitPrice.toFixed(2)}</Cell>
                </RowMob>
                <RowMob width={"14%"}>
                  <CellHeaderMob width={"14%"}>Стоимость, ₽</CellHeaderMob>
                  <Cell>{cost.toFixed(2)}</Cell>
                </RowMob>
                <CellEnd width={"5%"}>
                  <img src={close} alt="" />
                </CellEnd>
              </RowBody>
            ))
          : null}
      </Table>
    </Container>
  );
};
