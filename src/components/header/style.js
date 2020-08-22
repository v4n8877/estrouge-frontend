import styled from 'styled-components';
import InputCustom from '../input';

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 10px 6px -6px #777;
`
export const HeaderLeft = styled.div`
  flex: 1;
  a {
    display: flex;
  }
  a img {
    width: calc(237px - 130px);
    max-width: 100%;
    height: 34px;
  }
`
export const HeaderRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9b9b9b;
  
`
export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.1rem;
  width: 400px;
  border: 1px solid #c9ccd7;
  border-radius: 2rem;
  margin-left: 1rem;
`

export const SearchInput = styled(InputCustom)`
  height: 2.58rem;
  margin-left: .7rem;
  background: transparent;
  border: 0;
  color: #000;
  padding: 0;
  font-weight: 400;
  font-size: 0.875rem;
`
export const Avatar = styled.div`
  position: relative;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`
export const AvatarMenu = styled.div`
  position: absolute;
  display: ${props => props.show ? 'block' : 'none' };
  font-size: 0.9rem;
  margin-top: 0;
  padding: .5rem .5rem;
  right: 0;
  left: auto;
  top: 65px;
  background-color: #fff;
  box-shadow: 0px 3px 21px 0px rgba(0, 0, 0, 0.2);
`
export const AvatarItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding: 0.687rem 1.562rem;
  cursor: pointer;
  .ava__icon {
    margin-right: .5rem;
  }
  :hover {
    color: #000;
  }
`