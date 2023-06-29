import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

type NavItemProps = {
  title: string;
  path: string;
};

function NavItem({ title, path }: NavItemProps) {
  const navigate = useNavigate();
  return (
    <li css={NavItemStyles}>
      <button onClick={() => navigate(path)}>{title}</button>
    </li>
  );
}

function NavList() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login')
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <ul css={NavListStyles}>
        <NavItem title="HOME" path={'/dashboard'} />
        <NavItem title="MY" path={'/myPage'} />
        <NavItem title="CREATE" path={'/space/create'} />
      </ul>
      <Button danger onClick={onLogout}>
        로그아웃
      </Button>
    </div>
  );
}

export default NavList;

const NavListStyles = css`
  display: flex;
`;

export const NavItemStyles = css`
  display: block;

  font-size: 1.6rem;
  font-weight: 700;

  width: 100px;

  padding: 2rem 1.5rem;

  :hover {
    color: red;
  }
`;
