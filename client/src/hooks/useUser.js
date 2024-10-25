import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from '../components/api/axiosInstance';

export default function useUser() {
  const [user, setUser] = useState({ status: 'fetching', data: null });

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const logoutHandler = () => {
    axiosInstance
      .get('/account/logout')
      .then(() => setUser({ status: 'guest', data: null }));
    setAccessToken('');
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);

    if (!formData.email || !formData.password || !formData.name) {
      return alert('Заполните все поля!');
    }
    axiosInstance
      .post('/account/register', formData)
      .then(({ data }) => {
        setUser({ status: 'logged', data: data.user });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
      window.location.href = '/';
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Отсутствуют обязательные поля!');
    }
    axiosInstance
      .post('/account/login', formData)
      .then(({ data }) => {
        setUser({ status: 'logged', data: data.user });
      })
      .catch((error) => {
        alert('Неправильный адрес электронной почты или пароль');
        console.log(error);
      });
      window.location.href = '/';
  };

  return {
    user,
    signInHandler,
    signUpHandler,
    logoutHandler,
  };
}
