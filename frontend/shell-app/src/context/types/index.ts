export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  token: string | null;
}
