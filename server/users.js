const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // User signing for a same room and same username
    const existingUser = users.find((user) => user.room === room && user.name === name);
    if( existingUser ){
        return false;
    }

    const user = { id, name, room };
    users.push(user);

    return user;
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) {
        return users.splice(index, 1);
    }
}

const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    //console.log('Coool', user);
    return user;
};

const getUsersInRoom = (room) => users.filter((user) => user.room === room); 


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
};