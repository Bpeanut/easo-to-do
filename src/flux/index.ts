import { observable, configure, action } from "mobx";

type value = string;

configure({ enforceActions: true });

class Store {
    @observable searchValue: value = "";
    
    @action.bound
    handleSearch() {
        
    }
}

export default Store;