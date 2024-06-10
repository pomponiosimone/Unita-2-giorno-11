class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  static isSameAuthorStatic(user1, user2) {
    if (user1.age > user2.age) {
      return `${user1.firstName} è più grande di ${user2.firstName}`;
    } else if (user1.age < user2.age) {
      return `${user2.firstName} è più grande di ${user1.firstName}`;
    } else user1.age === user2.age;
    {
      return `${user1.firstName} e ${user2.firstName} hanno la stessa età`;
    }
  }
}
const primoUser = new User("Giacomo", "Biondi", 29, "Roma");
console.log(primoUser);

const secondoUser = new User("Pierluigi", "Ambrogio", 40, "Venezia");
console.log(secondoUser);

const terzoUser = new User("Simone", "Ambrogio", 40, "Milano");
console.log(terzoUser);

console.log(User.isSameAuthorStatic(primoUser, secondoUser));
console.log(User.isSameAuthorStatic(secondoUser, terzoUser));
