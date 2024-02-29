import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [
    {
      userId: 1,
      name: "Abhishek Yadav",
      username: "abhiyadav",
      password: "admin123",
      address: {
        streetNumber: 123,
        streetName: "Predule Way",
        suite: "",
        city: "Raebareli",
        state: "Uttar Pradesh",
        country: "India",
        zipcode: "229001"
      },
      email: "abhiyadav@gmail.com",
      isAdmin: true
    },
    {
      userId: 2,
      name: "Amit Kumar",
      username: "amitkumar",
      password: "pass123",
      address: {
        streetNumber: 456,
        streetName: "Sunrise Avenue",
        suite: "",
        city: "Lucknow",
        state: "Uttar Pradesh",
        country: "India",
        zipcode: "226001"
      },
      email: "amitkumar@gmail.com",
      isAdmin: false
    },
    {
      userId: 3,
      name: "Priya Singh",
      username: "priyasingh",
      password: "test123",
      address: {
        streetNumber: 789,
        streetName: "Garden Road",
        suite: "Apt 101",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        zipcode: "110001"
      },
      email: "priyasingh@gmail.com",
      isAdmin: false
    },
    {
      userId: 4,
      name: "Rahul Sharma",
      username: "rahulsharma",
      password: "rahul456",
      address: {
        streetNumber: 101,
        streetName: "Lake View Road",
        suite: "Flat 302",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        zipcode: "560001"
      },
      email: "rahulsharma@gmail.com",
      isAdmin: false
    }
  ];;
  passwordChangeRequired: boolean = true; // Default value for password change requirement 

  constructor() { }

  isUniqueUser(newUser: any): boolean {
    // Check if the username or email already exists 
    const existingUser = this.users.find(
      (user) =>
        user.username === newUser.username || user.email === newUser.email
    );

    return !existingUser; // Return true if the user is unique, false otherwise 
  }

  addUser(user: any): void {
    this.users.push(user); // Add the new user to the list 
  }

  isPasswordChangeRequired(username: string): boolean {
    // Implement the logic to check if password change is required for the given username 
    // You can use the username parameter to identify the admin user 
    // ... 

    return this.passwordChangeRequired; // Return the password change requirement status 
  }

  validateUser(username: string, password: string): boolean {
    // Find the user with the matching username 
    const user = this.users.find((user) => user.username === username);
    console.log(user);
    console.log(user.password);
    // Check if the user exists and the password matches 
    if (user && user.password === password) {
      console.log("inside the if");
      return true; // Credentials are valid 
    }

    return false; // Credentials are invalid 
  }

  changePassword(email: string, newPassword: string): void {
    // Find the user with the matching email 
    const user = this.users.find((user) => user.email === email);

    // Update the user's password 
    if (user) {
      user.password = newPassword;
    }

    // Reset the password change requirement 
    this.passwordChangeRequired = false;
  }

  isEmailExists(email: string): boolean {
    // Check if the email exists in the signup page data 
    const existingUser = this.users.find((user) => user.email === email);
    return !!existingUser; // Return true if the email exists, false otherwise 
  }
} 