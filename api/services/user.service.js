const CONSTANTS = require('../utils/constants');

const getUsers = async (offset, limit) => {
  const QUERY = 'SELECT *FROM users LIMIT ? OFFSET ?';
  const COUNT_QUERY = 'SELECT COUNT(*) AS total FROM users';

  const [users, headers] = await global.DB_CONNECTION_POOL.execute(QUERY, [limit, offset]);
  const [total, totalHeaders] = await global.DB_CONNECTION_POOL.execute(COUNT_QUERY);

  return {
    users,
    total: extractTotalFromResult(total),
  };
};

const getUserById = async (id) => {
  const QUERY = 'SELECT *FROM users WHERE id = ?';
  const [user, headers] = await global.DB_CONNECTION_POOL.execute(QUERY, [id]);
  return user;
};

const getUserFriends = async (id, offset, limit) => {
  const QUERY = 'SELECT u.* FROM users u WHERE u.id IN (SELECT friendId FROM friends WHERE userId = ?) LIMIT ? OFFSET ?';
  const COUNT_QUERY = 'SELECT COUNT(u.id) as total FROM users u WHERE u.id IN (SELECT friendId FROM friends WHERE userId = ?)';

  const [friends, headers] = await global.DB_CONNECTION_POOL.execute(QUERY, [id, limit, offset]);
  const [total, totalHeaders] = await global.DB_CONNECTION_POOL.execute(COUNT_QUERY, [id]);

  return {
    friends,
    total: extractTotalFromResult(total),
  };
};

const extractTotalFromResult = (resultSet) => {
  let total = 0;
  if (resultSet[0] && resultSet[0][CONSTANTS.TOTAL]) {
    total = resultSet[0][CONSTANTS.TOTAL];
  }
  return total;
};

const createDummyUsers = async () => {
  const QUERY = 'INSERT INTO users(firstName, lastName, avatar) VALUES(? , ?, ?)';
  try {
    const userList = [
      { firstName: 'Jitesh', lastName: 'Ahuja', avatar: null },
      { firstName: 'Gaurav', lastName: 'Kalekar', avatar: 'https://scontent.fpnq7-2.fna.fbcdn.net/v/t1.0-9/101832701_3030061320416164_189298132360626176_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=MRxk7_XT6ZoAX8SKSJ9&_nc_ht=scontent.fpnq7-2.fna&oh=96cb76f15b0dc01b98e359781d9a747c&oe=5FC453BD' },
      { firstName: 'Digvijay', lastName: 'Zite', avatar: null },
    ];

    userList.forEach(async (user) => {
      const result = await global.DB_CONNECTION_POOL.execute(QUERY, [user.firstName, user.lastName, user.avatar]);
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
};

const createDummyFriends = async () => {
  const QUERY = 'INSERT INTO friends(userId, friendId) VALUES(? , ?)';
  try {
    const userList = [
      { userId: 2, friendId: 4 },
      { userId: 2, friendId: 5 },
      { userId: 2, friendId: 6 },
    ];

    userList.forEach(async (user) => {
      const result = await global.DB_CONNECTION_POOL.execute(QUERY, [user.userId, user.friendId]);
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
};

const createDummyFriendsOfFriends = async () => {
  const QUERY = 'INSERT INTO friends(userId, friendId) VALUES(? , ?)';
  try {
    const userList = [
      { userId: 4, friendId: 5 },
      { userId: 4, friendId: 5 },
      { userId: 5, friendId: 6 },
    ];

    userList.forEach(async (user) => {
      const result = await global.DB_CONNECTION_POOL.execute(QUERY, [user.userId, user.friendId]);
      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  createDummyUsers,
  getUserById,
  getUserFriends,
  createDummyFriends,
  createDummyFriendsOfFriends,
};
