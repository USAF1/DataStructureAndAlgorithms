//this is a simple Hash Table implementation on showing how the Hash Table works behind the sceens.


class HashTable{
    //properties defination in TS its is important to have in TS in JS we can just do this
    data;
    constructor(size:number){
        this.data = new Array(size);
    }

    _hash(key:any){
        let hash = 0;
        for(var i = 0; i < key.length; i++){
            hash += (hash + key.charCodeAt(i) * i);
        } 
        return hash % this.data.length;
    }


    set(key:any, value:any){
        let address = this._hash(key);
        
        console.log(`address is ${address}`);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);

        return this.data;
    }

    get(key:any){
        let address = this._hash(key);
        let data = this.data[address] 
        if(data){
            for(var i = 0; i < data.length; i++){
                if(data[i][0] === key){
                    return data[i][1];
                }
            }
        }
        return undefined;
    }
}


const myHashTable = new HashTable(50);
myHashTable.set('1', 2)
// myHashTable.set('1', 1)
// myHashTable.set('5', 5)
// myHashTable.set('7', 7)
// myHashTable.set('2', 2)
