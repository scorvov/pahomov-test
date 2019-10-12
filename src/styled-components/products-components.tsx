import styled from "styled-components";

interface WidthProps {
  width?: string;
  align?: string;
}

export const ContainerProducts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 1024px;
  min-width: 360px;
  height: 624px;
  margin: 30px auto;
  padding: 34px;
  font-family: IBM Plex Sans, sans-serif;
`;

export const Table = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  @media (max-width: 640px) {
    align-items: center;
  }
`;
export const Header = styled.p`
  padding: 21px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #c6213c;
  @media (max-width: 640px) {
    width: 320px;
  }
`;
export const RowHead = styled.div`
  display: flex;
  background: #f3f3f3;
  border-top: 1px solid #e6e6e6;
  @media (max-width: 640px) {
    display: none;
  }
`;
export const RowBody = styled.div`
  display: flex;
  cursor: pointer;
  border-top: 1px solid #e6e6e6;
  &:last-child {
    border-bottom: 1px solid #e6e6e6;
  }
  &:hover {
    background-color: #fafafa;
  }
  @media (max-width: 640px) {
    width: 320px;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const Cell = styled.div<WidthProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.align ? props.align : "center")};
  box-sizing: border-box;
  min-height: 40px;
  border-right: 1px solid #e6e6e6;
  padding: 0 10px;
  font-size: 14px;
  line-height: 150%;
  overflow: hidden;
  list-style: none;
  &:first-child {
    border-left: 1px solid #e6e6e6;
  }
  @media (min-width: 640px) {
    width: ${props => (props.width ? props.width : "100%")};
  }
  @media (max-width: 640px) {
    justify-content: start;
    width: 160px;
  }
`;
export const CellHeader = styled(Cell)<WidthProps>`
  font-weight: 600;
  line-height: 100%;
  color: #4f525a;
`;
export const CellHeaderMob = styled(CellHeader)`
  display: none;
  @media (max-width: 640px) {
    background: #f3f3f3;
    display: flex;
  }
`;
export const CellImage = styled(Cell)`
  min-width: 30px;
  @media (max-width: 640px) {
    border-bottom: 1px solid #e6e6e6;
    justify-content: center;
    width: 320px;
    height: 100px;
  }
`;
export const CellEnd = styled(Cell)`
  min-width: 30px;
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 640px) {
   width: 80px;
   height: 80px;
`;
export const RowMob = styled.div<WidthProps>`
  display: flex;
  flex-flow: row nowrap;
  @media (min-width: 640px) {
    width: ${props => (props.width ? props.width : "100%")};
  }
  @media (max-width: 640px) {
    border-bottom: 1px solid #e6e6e6;
    width: 320px;
  }
`;
