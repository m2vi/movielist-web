export default ({ username, password, accountCreated, _id }) => {
  return {
    _id: _id,
    username: username,
    password: password,
    accountCreated: accountCreated,
  };
};
