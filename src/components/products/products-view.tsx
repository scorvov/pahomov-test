import React from "react";
import styled from "styled-components";
import { IDataState } from "../../store/models/IDataState";
import close from "./../../assets/svg/close.svg";

const Container = styled.div`
  max-width: 1024px;
  height: 624px;
  margin: 50px auto;
  padding: 34px;
  font-family: IBM Plex Sans, sans-serif;
`;

const Header = styled.p`
  padding: 21px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #c6213c;
`;
const Table = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const RowHead = styled.div`
  display: flex;
  background: #f3f3f3;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RowBody = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
interface WidthProps {
  width?: string;
  start?: boolean;
}
const Cell = styled.div<WidthProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.start ? "start" : "center")};
  box-sizing: border-box;
  min-height: 40px;
  border: 1px solid #e6e6e6;
  padding: 0 10px;
  font-size: 14px;
  line-height: 150%;
  overflow: hidden;
  list-style: none;
  @media (min-width: 768px) {
    width: ${props => (props.width ? props.width : "100%")};
  }
  @media (max-width: 768px) {
    justify-content: start;
    width: 160px;
  }
`;
const CellHeader = styled(Cell)<WidthProps>`
  font-weight: 600;
  line-height: 100%;
  color: #4f525a;
`;
const CellHeaderMob = styled(CellHeader)`
  display: none;
  @media (max-width: 768px) {
    background: #f3f3f3;
    display: flex;
  }
`;
const CellImage = styled(Cell)`
  min-width: 30px;
  @media (max-width: 768px) {
    justify-content: center;
    width: 320px;
    height: 100px;
  }
`;
const CellEnd = styled(Cell)`
  min-width: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
   width: 80px;
   height: 80px;
`;
const RowMob = styled.div<WidthProps>`
  display: flex;
  flex-flow: row nowrap;
  @media (min-width: 768px) {
    width: ${props => (props.width ? props.width : "100%")};
  }
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const ProductsView: React.FC<IDataState> = ({ products }) => {
  return (
    <Container>
      <Header>Результаты расчета</Header>
      <Table>
        <RowHead>
          <CellImage width={"5%"} />
          <CellHeader width={"52%"} start>
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
                  <Cell start>{name}</Cell>
                </RowMob>
                <RowMob width={"10%"}>
                  <CellHeaderMob width={"10%"}>Кол-во</CellHeaderMob>
                  <Cell>{number} уп.</Cell>
                </RowMob>
                <RowMob width={"14%"}>
                  <CellHeaderMob width={"14%"}>Цена за ед, ₽ </CellHeaderMob>
                  <Cell>{unitPrice}</Cell>
                </RowMob>
                <RowMob width={"14%"}>
                  <CellHeaderMob width={"14%"}>Стоимость, ₽</CellHeaderMob>
                  <Cell>{cost}</Cell>
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
