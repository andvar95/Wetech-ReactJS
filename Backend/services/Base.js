class BaseService {
    constructor(Repository) {
        this.repository = new Repository();
    }

    async create(element, findCriteria = null) {
        const alreadyExist = await this.repository.findOne(findCriteria || element);

        if (alreadyExist) {
            const error = new Error("Can not create Element 'cause already Exists");
            error.status = 400;
            throw error;
        }

        return await this.repository.create(element);
    }

    async update(id, element) {
        const result = await this.repository.update(id, element);

        if (!result) {
            const error = new Error("Could not update");
            error.status = 200;
            throw error;
        }
        return result;
    }

    list(name, populateField) {
        return this.repository.list(name, populateField);
    }

    getAll(params, populateField) {
        console.log(params);
        return this.repository.getAll(params, populateField);
    }
    async getOne(data, populateField) {
        return this.repository.findOne(data, populateField);
    }
    async get(id, populateField) {
        const element = await this.repository.findById(id, populateField);
        console.log("id", id);
        if (!element) {
            const error = new Error("This element does not exist");
            error.status = 404;
            throw error;
        }
        return element;
    }

    async remove(id) {
        const removedItem = await this.repository.remove(id);

        if (!removedItem) {
            const error = new Error("Can not Remove Element");
            error.status = 204;
            throw error;
        }

        return removedItem;
    }
}

module.exports = BaseService;