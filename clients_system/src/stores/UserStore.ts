import { makeAutoObservable } from "mobx";



class UserStore {
    email: string = "";
    password: string = "";
    error: string = "";
    isAuthenticated: boolean = false;
  
    constructor() {
        makeAutoObservable(this);
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    setPassword(password: string) {
      this.password = password;
    }
  
    setError(error: string) {
      this.error = error;
    }
  
    setAuthenticated(auth: boolean) {
      this.isAuthenticated = auth;
    }

    async login() {
      try {
        const response = await fetch("http://localhost:5000/api/Auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });

        console.log("Response Status:", response.status);
        console.log("Response OK:", response);
  
        if (response.ok) {
          this.setAuthenticated(true);
          this.setError("");
        } else {
          this.setError("Invalid credentials. Please try again.");
        }
      } catch (error) {
        this.setError("An error occurred. Please try again.");
      }
    }
  }
  
  export const userStore = new UserStore();