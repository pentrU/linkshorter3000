import mongoose, { Schema } from 'mongoose'

const link = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    auto: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const Link = mongoose.model('links', link)

export default Link