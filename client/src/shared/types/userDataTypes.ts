
export interface UserDataType{
    email:string | null
    username:string | null
    color?:string | null
    password?:string | null
    phone?:string | null
    _id:string
}

export interface UserDataTypeSlice{
    userData:UserDataType | null
    token:string
    notificationAuth:string | null
    isAuth:boolean
}