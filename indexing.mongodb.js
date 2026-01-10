use("libraryDB");

// 1. Single Field Index (userId)
// Creates an index on the userId field in the loans collection
db.loans.createIndex({ userId: 1 })
// Explaination : A single-field index on userId in loans helps quickly find all loans of a user as admin need to check the loan history of a user by userId.

// 2. Compound Index (userId and payment.status)
// Creates a compound index on userId and payment.status fields in the fines collection
db.fines.createIndex({ userId: 1, "payment.status": 1 })
// Explaination : A compound index on userId and payment.status in fines allows efficient retrieval of unpaid fines for specific users as admin often need to check the unpaid fines of a user.

