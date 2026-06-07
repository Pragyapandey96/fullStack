import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required: true,
    },
    address
},
    {timestamps: true}
)

export const Patient = mongoose.model("Patient", patientSchema)