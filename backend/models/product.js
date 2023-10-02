import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter product name'],
    },
    description:{
        type: String,
        required: [true, 'please enter description'],
    },
    price:{
        type: Number,
        required: [true, 'please enter the price of the product'],
    },
    images: [
        {
            public_id:{
                type: String, 
            },
            url:{
                type: String,
            }
        }
    ],

    category:{
        type:String,
        required:[true, 'please enter product category'],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Sports',
            ],
            message: 'Please select correct Category'
        }
    },

    seller:{
        type: String,
        required: [true, 'please enter seller details']
    },
    stock:{
        type: Number,
        required:[true, 'please enter product stock']
    },
    ratings:{
        type: Number,
        default:0,
    },
    reviews:[
        {
            rating:{
                type:Number,
                require: true,
            },
            comment:{
                type: String,
                required: true,
            },
            createdAt:{
                type: Date,
                default: Date.now,
            },
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Product || mongoose.models('product', productSchema) ;