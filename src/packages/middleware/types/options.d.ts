interface IOptions {
  paths: {
    authPaths: string[];
    publicPaths?: string[];
    adminPaths?: string[];
    userPaths?: string[];
    notFoundPaths?: string[];
  };
}
