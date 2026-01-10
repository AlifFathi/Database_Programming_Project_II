use("libraryDB");

db.users.findOne({name: "Danial Afiq"}, {_id: 1, email: 1, contact: 1})

db.books.find({}, {title: 1, authors: 1, categories: 1})

db.fines.find({amount: {$gt: 5.0, $lt: 25.0}}, 
    {loanId: 1 ,amount: 1, reason: 1}).sort({amount: 1})

db.fines.find({amount: {$eq: 0.0}})

db.loans.find({status: {$in: ["BORROWED", "PENDING"]}}, {userId: 1, bookId: 1, status: 1})

db.books.find({$and: [{categories: "Computer Science"}, {categories: "Database"}]}, 
    {title: 1, authors: 1, categories: 1})

db.books.find({$or: [{categories: "Programming"}, {"publisher.year": 2020}]}, 
    {title: 1, authors: 1, categories: 1, publisher: 1})

db.books.find({authors: "Abraham Silberschatz"}, {title: 1, authors: 1, categories: 1})
