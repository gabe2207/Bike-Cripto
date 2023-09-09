"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    constructor(name, type, bodySize, maxLoad, rate, description, ratings, imageUrls, id, Rented //false = disponivel, true = alugada
    ) {
        this.name = name;
        this.type = type;
        this.bodySize = bodySize;
        this.maxLoad = maxLoad;
        this.rate = rate;
        this.description = description;
        this.ratings = ratings;
        this.imageUrls = imageUrls;
        this.id = id;
        this.Rented = Rented;
    }
}
exports.Bike = Bike;
