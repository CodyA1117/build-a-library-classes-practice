class Movie extends Media { 
    constructor(director, title, runTime, isCheckedOut = false, ratings = []) {
        super(title, isCheckedOut, ratings);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;

    }

    get runTime() {
        return this._runTime;
    }

}
