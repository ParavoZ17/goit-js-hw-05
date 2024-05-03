
// const sortByDescendingFriendCount = (users) => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length)
// };

const getTotalBalanceByGender = (users, gender) => { 
    return users.reduce ((totalBalance, user) => {
        if (user.gender === gender) {
            return totalBalance + user.balance;
        };
            return totalBalance;
    }, 0) 
};


 const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
