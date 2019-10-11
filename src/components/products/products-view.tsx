import React from "react";
import styled from "styled-components";
import { IDataState } from "../../store/models/IDataState";

const Container = styled.div`
  max-width: 1024px;
  height: 624px;
  margin: 50px auto;
  padding: 34px;
`;
const Wrapper = styled.div`
  border: 1px solid #e6e6e6;
  width: 100%;
`;
const Header = styled.p`
  padding: 21px 0;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #e6e6e6;
`;
const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 3em 0;
  padding: 0;
`;
const RowHead = styled.div`
  width: 100%;
  display: flex;
`;
interface WidthProps {
  width?: string;
}
const Cell = styled.div<WidthProps>`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : "10%")};
  border: 1px solid #e6e6e6;
  padding: 13px 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  //flex-grow: 1;
  overflow: hidden; // Or flex might break
  list-style: none;
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
`;
const RowBody = styled.div`
  width: 100%;
  display: flex;
`;

export const ProductsView: React.FC<IDataState> = ({ products }) => {
  return (
    <Container>
      <Header>Результаты расчета</Header>
      <Wrapper>
        <Table>
          <RowHead>
            <Cell width={"44px"}></Cell>
            <Cell width={"500px"}>Наименование</Cell>
            <Cell width={"89px"}>Кол-во</Cell>
            <Cell width={"133px"}>Цена за ед, Р </Cell>
            <Cell width={"133px"}>Стоимость, Р</Cell>
            <Cell width={"44px"}></Cell>
          </RowHead>
          {products
            ? products.map(({ name, number, unitPrice, cost }, index) => (
                <RowBody key={name}>
                  <Cell width={"44px"}>
                    <Image
                      src={require(`./../../assets/svg/image${index}.png`)}
                      alt={"img"}
                    />
                  </Cell>
                  <Cell width={"500px"}>{name}</Cell>
                  <Cell width={"89px"}>{number} уп.</Cell>
                  <Cell width={"133px"}>{unitPrice}</Cell>
                  <Cell width={"133px"}>{cost}</Cell>
                  <Cell width={"44px"}>btn</Cell>
                </RowBody>
              ))
            : null}
        </Table>
      </Wrapper>
    </Container>
  );
};
