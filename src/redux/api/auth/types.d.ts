namespace AUTHTODO {
  type GetResponse = {
    profile: {
      id: string;
      username: string;
      role: string; 
      email: string;
      isActive: string;
      photo: string;
      createdAt: string;
      updatedAt: string;
    };
  };
  type GetRequest = void;

  type LoginPostResponse = {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
  };
  type LoginPostRequest = {
    email: string;
    password: string;
  };
  type RegisterPostResponse = {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
  };
  type RegisterPostRequest = {
    email: string;
    password: string;
    photo: string;
    username: string;
  };
}
