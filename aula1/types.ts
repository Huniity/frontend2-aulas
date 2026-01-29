interface User {
    name: string;
    location?: string;
    age?: number;
    email?: string;
    role: "User" | "Admin" | "Client" | "Manager";
}

const user: User = {
    name: "John",
    location: "Faro",
    age: 30,
    email: "john.doe@example.com",
    role: "Admin"
}

function AuthenticateUser(user: User): string {
    return user.name + " " + user.age
}

const UserInfo: string = AuthenticateUser(user)

console.log(UserInfo);