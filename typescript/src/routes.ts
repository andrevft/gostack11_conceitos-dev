import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'a.fanchini@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
        ],
    });    
        
    return response.json({ message: 'Hello World' });
}