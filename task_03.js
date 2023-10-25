function getUserInfo(user) {
    const { name, age } = user;
    return `Привіт, мене звати ${name} і мені ${age} років.`;
  }
  
  const user = { name: "Nikita", age: 28 };
  const userInfo = getUserInfo(user);
  console.log(userInfo); // Результат: "Привіт, мене звати Нікіта і мені 28 років."
  