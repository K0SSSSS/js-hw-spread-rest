const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    city: "New York",
  };
  function personInfo(person) {
    const { name, age, email, city } = person;
    const fullName = `${name}, ${age}`;
    const contact = `${email}, ${city}`;
    
    return { fullName, contact };
  }
  console.log(personInfo(person));