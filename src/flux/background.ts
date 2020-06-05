import { observable, configure, action } from "mobx";

configure({ enforceActions: "observed" });

class BackgroundStore {
    @observable public background: string = "radial-gradient(circle, rgba(112,132,214,1) 50%, rgba(93,113,192,1) 100%)";

    @action.bound
    changeBackground(color: string) {
        this.background = color;
    }
}

export default new BackgroundStore();
