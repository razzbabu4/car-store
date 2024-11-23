import { TCar } from "./car.interface";
import { CarModel } from "./car.model";


const createCarIntoDB = async (carData: TCar): Promise<TCar> => {
    const result = await CarModel.create(carData);
    return result;
}

const getAllCarFromDB = async (searchTerm: string | undefined) => {
    const filterData: Record<string, unknown> = searchTerm ? {
        $or: [
            { brand: { $eq: searchTerm } },
            { model: { $eq: searchTerm } },
            { category: { $eq: searchTerm } },
        ]
    } : {}

    const result = await CarModel.find(filterData);
    return result;
}

const getSingleCarFromDB = async (id: string) => {
    const result = await CarModel.findById({ _id: new Object(id) })
    return result;
}

export const CarServices = {
    createCarIntoDB,
    getAllCarFromDB,
    getSingleCarFromDB
}