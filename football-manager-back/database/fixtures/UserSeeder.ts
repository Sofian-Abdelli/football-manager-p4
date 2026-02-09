import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    const admin = {
      id: 1, // On force l'ID ici
      email: "admin@football.com",
      password: "password123",
      refName: "admin-user", // On lui donne un petit nom ici
    };

    // Insert the fakeUser data into the 'user' table
    this.insert(admin); // insert into user(email, password) values (?, ?)
  }
}

// Export the UserSeeder class
export default UserSeeder;
