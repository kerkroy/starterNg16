import { Mapper } from 'src/app/core/mapper';
import { UserInterface } from 'src/app/core/user/user.model';

export interface UserEntity {
    id: string;
    fullName: string;
    userName: string;
    email?: string;
    expireAt: Date;
    activationStatus: boolean;
    roles?: Array<string>
}

export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserInterface> {
    mapFrom(param: UserEntity): UserInterface {
        return {
            id: param.id,
            fullName: param.fullName,
            userName: param.userName,
            expireAt: param.expireAt,
            activationStatus: param.activationStatus
        };
    }
    mapTo(param: UserInterface): UserEntity {
        return {
            id: param.id,
            fullName: param.fullName,
            userName: param.userName,
            expireAt: param.expireAt,
            activationStatus: param.activationStatus
        }
    }
}