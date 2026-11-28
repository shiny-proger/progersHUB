export const paths = {
    home: ()=> "/",
    language: ()=>"/languages",
    catalog: ()=>"/catalog",
    repo: (owner:string, name:string)=>
        `/repo/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`,
    profile: ()=>"/profile",
    apiLab: ()=>"/apiLab",
    compare: ()=>"/comapre"
    

} as const;

