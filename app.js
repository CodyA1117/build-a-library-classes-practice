class Media {
    constructor(title, isCheckedOut = false, ratings = []){
      this._title = title;
      this._isCheckedOut = isCheckedOut;
      this._ratings = ratings;
  
    }
    get title(){
      return this._title;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    get ratings(){
      return this._ratings;
    }

    set isCheckedOut(value){
      this._isCheckedOut = value;

    }

    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
      
    }
  
  
  }