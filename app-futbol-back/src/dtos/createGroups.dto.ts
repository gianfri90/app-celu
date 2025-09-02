import { IsInt, Min, MinLength } from "class-validator";

export class createGroupsDto{
    @MinLength(2)
    name:string

    @IsInt()
    @Min(10)
    maxIntegrantes:number
}