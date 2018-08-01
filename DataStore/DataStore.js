import { observable, action, decorate } from 'mobx';

class DataStore{
    hlthparams = {
        hba1c:'',
        serchol:'',
        renalinv:'',
        smoke:'',
        duration:'',
        history:'',
        follow:'',
    }
    
    updateHBA1C(val){
        this.hlthparams.hba1c=val;
    }

    updateSerChol(val){
        this.hlthparams.serchol=val;
    }

    updateRenalInv(val){
        this.hlthparams.renalinv=val;
    }

    updateSmoke(val){
        this.hlthparams.smoke=val;
    }

    updateDuration(val){
        this.hlthparams.duration=val;
    }

    updateHistory(val){
        this.hlthparams.history=val;
    }

    updateFollowUp(val){
        this.hlthparams.follow=val;
    }
}

decorate(DataStore,{
    hlthparams:observable,
    updateHBA1C:action,
    updateSerChol:action,
    updateRenalInv:action,
    updateSmoke:action,
    updateDuration:action,
    updateHistorys:action,
    updateRegFollowUp:action

});

export default new DataStore();