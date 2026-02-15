//  TUPLES ARE ARRAYS OF FIXED LENGTHS AND ORDERED WITH SPECIFIC TYPES

const color : [number,number,number] = [1,2,3]
const hero : [number,string] = [25,"dudu"]

type HttpRsponse = [number,string]

const good : HttpRsponse = [200,"ok"]

// below are the limitation with tuples we can push extra elements and pop 
good[0] = 23
good.push("sai")
good.pop()

const resp : HttpRsponse[] = [[200,"ok"],[400,"not found"]]  //array of tuples

// ENUMS ALLOW US DEFINE A SET OF NAMED CONSTANTS

enum OrderStatus {
    PENDING,
    sHIPPED,
    DELIVERED,
    RETURNED
}

enum OrderStatus1 {       // BY DEFAULT VALUES WILL BE ASSIGNED 0 AND INCREMENT BY ONE BUT ALSO WE CAN CUSTOMIZE
    PENDING = 21,
    sHIPPED =34,
    DELIVERED=45,
    RETURNED=56
}

const enum OrderStatus3 {
    PENDING,
    sHIPPED,
    DELIVERED,
    RETURNED
}

const order = {
    orderNum : 12431432,
    status : OrderStatus.DELIVERED
}

