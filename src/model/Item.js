class Item {
    /**
     * @param {string} id
     * @param {string} userId
     * @param {string} name
     * @param {boolean} missing
     * @param {StoreUrl[]} storeURLs
     * @param {Category[]} organizationHierarchy
     */
    constructor(id, userId, name, missing, storeURLs, organizationHierarchy) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.missing = missing;
        this.storeURLs = storeURLs;
        this.organizationHierarchy = organizationHierarchy;
    }
}