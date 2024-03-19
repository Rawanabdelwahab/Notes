import noteModel from "../models/note.js"
export const post = async (req, res) => {
    const{ text} = req.body
    const createText = await noteModel.create({ text })
    res.json()
}
export const get = async (req, res) => {
    const find = await noteModel.find({}).sort({ date: -1 }).lean()
    res.json(find)
}
export const edit = async (req, res) => {
    const id = req.params.id
    const { text} = req.body
    let updatedUser = {}
    updatedUser.text = text
    // const updateOne = await noteModel.updateOne({ "_id": id }, { updatedUser }).lean()
    const updatedData = await noteModel.findByIdAndUpdate(id, updatedUser)
    res.json(updatedData);
}
export const deleteOne = async (req, res) => {
    const id = req.params.id
    const { text } = req.body
    let deletedUser = {}
    deletedUser.text = text
    const deletedData = await noteModel.deleteOne({ "_id": id }, { deletedUser }).lean() // deleteOne
    res.json(deletedData);
}