import { model, Schema } from 'mongoose'
import TTourModel, { ITour, ITourMethods } from './tour.interface'

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>({
  name: {
    type: String,
    required: true,
  },
  durationHours: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  coverImage: { type: String, required: true },
  images: [String],
  startDates: [Date],
  startLocation: { type: String },
  locations: [String],
  slug: String,
})
const Tour = model<ITour, TTourModel>('Tour', tourSchema)

export default Tour