export class videoListModel{
    _id: string;
    name: string;
    description:string;
    url:string;
    ratings:[number];
    ratingTotal:number;
    truncate:boolean;

    constructor(response){
        this._id= response._id,
        this.name= response.name,
        this.description=response.description,
        this.url=response.url,
        this.ratings=response.ratings,
        this.ratingTotal=response.ratingTotal,
        this.truncate=response.truncate
    }
}
