interface TechObject {
    title: string;
    experinece: number;
}

interface CreateUserData {
    name?: string;  // ? significa que pode ser vazio
    email: string;
    password: string;
    techs: Array<string | TechObject>;

}

export default function createUser({ name, email, password, techs }: CreateUserData) {
    const user = {
        name,
        email,
        password,
        techs,
    }

    return user;
}