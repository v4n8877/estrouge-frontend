import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem 0.9375rem;
  font-weight: ${props => props.header ? 'bold' : '500'};
  border-top: 1px solid #c9ccd7;
  :nth-child(even) {
    background-color: #dddce1;
  }
  :first-child {
    border: none;
  }
`

export const Cell = styled.div`
  flex: 2;
  text-align: left;
  font-size: 0.875rem;
  img {
    width: 36px;
    height: 36px;
    border-radius: 100%;
  }
  :first-child {
    flex: 1;
  }
`