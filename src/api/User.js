import Axios from "axios";

const get = async url => {
  try {
    const getUser = await Axios.get(url);
    return getUser.data;
  } catch (error) {
    console.log(error);
  }
};
const add = async (url, user) => {

    try {
      const addUser = await Axios.post(url,{
        name: user.name,
        createdAt: user.createdAt,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status
      });
       return addUser.data;
    } catch (error) {
      console.log(error);
    }
  };
  const update = async (url, editUser) => {
    try {
      const user = await Axios.put(url,{
        name: editUser.item.name,
        createdAt: editUser.item.createdAt,
        email: editUser.item.email,
        phone: editUser.item.phone,
        role: editUser.item.role,
        status: editUser.item.status
      });
       return user.data;
    } catch (error) {
      console.log(error);
    }
  };
export { get, add, update};
