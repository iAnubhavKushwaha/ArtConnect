import { model, models, Schema, Document} from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string; // Optional field
    location?: string; // Optional field
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string; // Optional field
    isFree: boolean;
    url?: string; // Optional field
    category: {_id: string, name: string}// Reference to 'Category'
    organizer: {_id: string, firstName: string, lastName: string} // Reference to 'User'
}

const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;