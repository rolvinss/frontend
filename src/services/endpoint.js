import { baseUrl } from 'constants/urlConstants';

export default {
  login: () => `${baseUrl}/user/login`,
  logout: () => `${baseUrl}/logout`,
  userInfo: () => `${baseUrl}/auth/info`,
};
