import mongoose, {Schema, model, models} from "mongoose";

export  const VIDEO_DIMENSIONS = {
    width : 1080,
    height : 1920
} as const;

export  interface Ivideo {
    _id?: mongoose.Types.ObjectId
    title : string
    description : string
    videoURl : string
    thumbnailURL : string
    controls?: boolean
    transformation?: {
        width : number
        height : number
        quality?: number
    }
};

const videoSchema = new Schema<Ivideo> (
    {
        title : {type: String, required : true},
        description : {type: String, required : true},
        videoURl : {type: String, required : true},
        thumbnailURL : {type: String, required : true},
        controls : {type: Boolean, default : true},
        transformation : {
            height : {type: Number , default: VIDEO_DIMENSIONS.height},
            width : {type: Number , default: VIDEO_DIMENSIONS.width},
            quality : {type : Number, min:1, max:100}
        }
    },
    {
        timestamps: true
    }
);

const video = models?.video ||  model<Ivideo>("Video", videoSchema);

export default video;