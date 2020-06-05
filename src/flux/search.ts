import { observable, configure, action } from "mobx";

configure({ enforceActions: "observed" });

class SearchStore {
    @observable public searchValue: value = "";
    @observable public theme: theme = "dark";
    
    @action.bound
    handleSearch() {
        
    }
}

export default new SearchStore();
