
export interface UserDataTypes{
    email:string
    password:string | number
    username?:string
}

export interface UserDataType{
    userData:UserDataType | null
    token:string
    notificationAuth:string | null
    isAuth:boolean
}