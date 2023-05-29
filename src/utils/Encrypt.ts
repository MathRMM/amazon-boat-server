import bcrypt from 'bcrypt';

export class Encrypt{
    static create(password: string){
        return bcrypt.hashSync(password, Number(process.env.SALT));
    }
    static verify(password: string, hashPassword: string){
        return bcrypt.compareSync(password, hashPassword)
    }
}