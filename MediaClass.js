class Media {
    constructor(title, isCheckedOut = false, ratings = []) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings; // Ensure this returns the array
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        if (this.ratings.length === 0) return 0; // Handle empty ratings array
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingsSum / this.ratings.length;
    }

    addRating(rating) {
        this._ratings.push(rating); // Directly access the _ratings array
    }
}

// Test cases
const historyOfEverything = new Media('A Short History of Nearly Everything', false, [4, 5, 3]);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // Expected: true
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // Expected: 4.6

const speed = new Media('Speed', false, [1, 2, 3]);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // Expected: true
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // Expected: 2