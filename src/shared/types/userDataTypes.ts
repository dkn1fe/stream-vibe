
export interface UserDataType{
    email:string
    username:string
    color?:string | null
    password?:string | null
    _id:string
}

export interface UserDataTypeSlice{
    userData:UserDataType | null
    token:string
    notificationAuth:string | null
    isAuth:boolean
}