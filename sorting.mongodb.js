use("libraryDB");

// 1. Sort users by name in ascending order
db.users.find().sort({ name: 1 })

// 2. Sort books by title in ascending order
db.books.find().sort({ title: 1 })

// 3. Sort books by published year in descending order
db.books.find().sort({ "publisher.year": -1 })

// 4. Sort fines by amount in descending order
db.fines.find().sort({ amount: -1 })

