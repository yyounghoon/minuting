import { useNavigate, useSearchParams } from 'react-router-dom';
import { fetcher } from '../../@shared/lib/fetcher';
import { setLocalStorage } from '../../@shared/utils/storage';

type LoginRes = {
  accessToken: string;
  refreshToken: string;
};

const useLogin = () => {
  const [params] = useSearchParams();
  const code = params.get('code') || undefined;
  const navigate = useNavigate();

  const requestLogin = async () => {
    console.log('로그인 요청 시작');
    try {
      const { accessToken } = await fetcher<LoginRes>({
        url: '/auth/login',
        method: 'post',
        params: {
          code,
          type: import.meta.env.VITE_APP_LOGIN_TYPE,
        },
      });
      setLocalStorage('accessToken', accessToken);
      navigate('/dashboard');
    } catch (e) {
      console.error('로그인 실패 reason -> ', e);
    }
  };

  if (code) {
    requestLogin();
  }

  const onLogin = () => {
    location.href = `https://bbubbu.me/auth/code?type=${
      import.meta.env.VITE_APP_LOGIN_TYPE
    }`;
  };

  return {
    onLogin,
  };
};
export default useLogin;
