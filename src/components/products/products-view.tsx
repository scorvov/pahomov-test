import React from "react";
import styled from "styled-components";

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
const RowHeadCell = styled.div<WidthProps>`
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

export const ProductsView: React.FC = () => {
  return (
    <Container>
      <Header>Результаты расчета</Header>
      <Wrapper>
        <Table>
          <RowHead>
            <RowHeadCell width={"44px"}></RowHeadCell>
            <RowHeadCell width={"500px"}>Наименование</RowHeadCell>
            <RowHeadCell width={"89px"}>Кол-во</RowHeadCell>
            <RowHeadCell width={"133px"}>Цена за ед, Р </RowHeadCell>
            <RowHeadCell width={"133px"}>Стоимость, Р</RowHeadCell>
            <RowHeadCell width={"44px"}></RowHeadCell>
          </RowHead>
        </Table>
      </Wrapper>
    </Container>
  );
};
