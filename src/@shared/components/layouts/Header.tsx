import { css } from '@emotion/react';
import palette from '../../../styles/palette';
import { borderStyle } from '../../../styles/common.styles';
import Navigation from '../Navigation';

function Header() {
  return (
    <div css={headerStyles}>
      <div css={logoStyle}>
        <img src={'/logo.svg'} width={130} height={50} alt={'logo'} />
      </div>
      <div css={menuStyle}>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;

const headerStyles = css`
  position: sticky;
  top: 0;

  min-width: 1180px;
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;

  padding: 0 30px;
  background-color: ${palette.white};
  ${borderStyle}
`;

const logoStyle = css`
  width: 233px;
`;

const menuStyle = css`
  flex: 1;
`;
