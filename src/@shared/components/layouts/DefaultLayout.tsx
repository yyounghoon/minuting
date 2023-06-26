import { css } from '@emotion/react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <div css={container}>
        <div css={LayoutStyles}>
          <Header />
          <div css={mainBackground}>
            <main css={mainStyles}>
              <Sidebar />
              <div css={contentStyles}>
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;

const container = css`
  height: 100%;
`;

const mainBackground = css`
  flex: 1;
  width: 100%;

  background: #f8f8f8;
`;

const LayoutStyles = css`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const mainStyles = css`
  width: 100%;
  height: 100%;

  display: flex;

  min-width: 1180px;
  padding: 30px;
  margin: 0 auto;
`;

const contentStyles = css`
  width: 100%;
  height: 100%;
`;
