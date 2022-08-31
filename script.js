
/*******************OBJELER***************/

ADI="EMRE"


let isim="Tayfun"
let soyİsim="Erbilen"

function letsLearnScope(){
    console.log(isim,soyİsim)
 
    if(true){
        let isim="Mustafa Şinasi Poyraz"
        let soyİsim="Polat"

        console.log(isim,soyİsim)
    }

    console.log(isim,soyİsim)

}

letsLearnScope()

console.log(isim,soyİsim)


const nesne={
    name:"Gurbet",
    surName:"Polat",
    age:23,

    isMarried:false,

    skills:[
        "html","javascript","css"
    ],
    "phone number":505896885,

    siblingis:[
        {
            id:1,
            adı:"Fadime",
            doyadı:"Demir"
        }
    ]
    ,
    getFullName:function(){
        return `${this.name} ${this.surName}`
    }
}
console.log(nesne.name)
console.log(nesne.skills[2]);
console.log(nesne.isMarried ? "Evli":"bekar");
console.log(nesne.siblingis[0].doyadı);
console.log(nesne["phone number"]);
console.log(nesne.getFullName());

nesne.name="Emre"
nesne.surName="POLAT"

nesne.siblingis.push("React")
console.log(nesne.name)
console.log(nesne.siblingis)






for(let [key,val] of Object.entries(nesne)){
    console.log(key.val);
}