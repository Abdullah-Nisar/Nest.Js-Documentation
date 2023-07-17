import { Injectable } from "@nestjs/common";
import { UsersService } from "../Users/users.service";

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}
}