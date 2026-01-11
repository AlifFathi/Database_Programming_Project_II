use("libraryDB");

// 1. Single Field Index (name)
// Creates an index on the name field in the users collection
db.users.createIndex({ name: 1 })
// Explaination : A single-field index on name in users helps quickly retrieve users in alphabetical order as the index already maintains sorted data for efficient sorting operations.

// 2. Compound Index (userId and payment.status)
// Creates a compound index on userId and payment.status fields in the fines collection
db.fines.createIndex({ userId: 1, "payment.status": 1 })
// Explaination : A compound index on userId and payment.status in fines allows efficient retrieval of unpaid fines for specific users as admin often need to check the unpaid fines of a user.

