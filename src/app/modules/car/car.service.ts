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
    const result = await CarModel.findById(id)
    return result;
}

const updateSingleIntoDB = async (id: string, data: TCar) => {
    const result = await CarModel.findByIdAndUpdate(id, data, { new: true });
    return result;
}

const deleteSingleFromDB = async (id: string) => {
    const result = await CarModel.findByIdAndDelete(id);
    return result;
}

export const CarServices = {
    createCarIntoDB,
    getAllCarFromDB,
    getSingleCarFromDB,
    updateSingleIntoDB,
    deleteSingleFromDB
}