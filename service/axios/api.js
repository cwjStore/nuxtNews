import service from './httpClient'

let API = {}

API.getContactList = () => {
  return service.get('/contactList')
}

API.getUser = () => {
    return service.get('/user')
}

API.getData =(params) =>{
  return  service.get('/joke/content/list.php', { params: params })
}

export default API
