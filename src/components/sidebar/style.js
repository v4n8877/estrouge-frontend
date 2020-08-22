import styled from 'styled-components';

export const StyleSideBar = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px 0px;
`
export const SideBarUl = styled.ul`
  list-style: none;
  padding: 0 10px;

  .active {
    color: #248afd;
    background-color: #e8e7ec;
    pointer-events: none;
  }
`

export const SideBarLi = styled.li`
  padding: 15px;
  background: transparent;
  border-radius: 0.437rem;
  
  :hover {
    background-color: #e8e7ec;
  }

  a {
    color: #787878;
    display: block;
    text-decoration: none;
  }

  :hover a {
    color: #56595a
  }

  .menu__icon {
    margin-right: .5rem;
  }
`