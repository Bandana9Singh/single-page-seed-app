export interface Users {
    name: string;
    email: string;
}

export interface User {
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
}