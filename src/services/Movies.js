

const movies_list = [
    {
        name:"Gone Girl",
        rating:"7",
        type:"thriller",
        id:"1",
        liked:"true"
    },
    {
        name:"Dunkirk",
        rating:"8",
        type:"war",
        id:"2"
    },
    {
        name:"Intersteller",
        rating:"9",
        type:"sci-fi",
        id:"3"
    },
    {
        name:"Twilight-New Moon",
        rating:"8",
        type:"Romance",
        id:"4",
        liked:"true"
    },
    {
        name:"MS Dhoni",
        rating:"9",
        type:"Biopic",
        id:"5"
    }
];

export function getMovies(){
    return movies_list;
}