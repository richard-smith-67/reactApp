export const addTodo = (list, item) => [...list, item] //spread operator

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updatedTodo) => {
    const indexToUpdate = list.findIndex(item => item.id === updatedTodo.id)   
    return [
        ...list.slice(0, indexToUpdate),
        updatedTodo,
        ...list.slice(indexToUpdate + 1)
    ]
}
   
