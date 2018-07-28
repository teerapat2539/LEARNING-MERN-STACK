import axios from 'axios';

class  ItemService {
  constructor() {

  }
  sendDate(data){
      axios.post('http://localhost:4200/items/update/'+id, {
        item:data
      }).then(res => this.setState({ items: res.data}))
       .catch(err => console.log(err));
  }
}

export default ItemService;
