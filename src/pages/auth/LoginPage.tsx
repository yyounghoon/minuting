import { Button } from 'antd';
import styled from '@emotion/styled';
import useLogin from './useLoginPage';

function LoginPage() {
  const { onLogin } = useLogin();

  return (
    <Block>
      <Logo src={'./logo.svg'} alt={'logo'} />
      <Button size={'large'} onClick={onLogin}>
        구글 계정으로 로그인
      </Button>
    </Block>
  );
}
export default LoginPage;

const Block = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: inline-block;
  width: 300px;
  height: 200px;
`;
