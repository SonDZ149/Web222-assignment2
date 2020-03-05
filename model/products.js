const products =
{
    fakeDB: [],
    init() {
        this.fakeDB.push({ title: ` `, price: ` ` });
         

    },
    getAllProducts() {
        return this.fakeDB;
    }
}
products.init();
module.exports = products;