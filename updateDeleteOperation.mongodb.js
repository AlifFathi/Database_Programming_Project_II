use("libraryDB");

db.loans.updateOne({_id: "L004"}, 
    {$set: {
        bookId: "B004",
        loanDate: new Date("2024-12-12"),
        dueDate: new Date("2024-12-26"),
        status: "BORROWED"
    }}
)

db.fines.updateMany({"payment.status": "UNPAID"},
    {$inc: {amount: 2.0}}
)

db.users.updateOne({_id: "A23CS0004"},
    {$push: {borrowHistory: "B005"}}
)

db.books.updateOne({title: "Introduction to Algorithms"},
    {$pull: {authors: "Clifford Stein"}}
)

db.fines.deleteOne({_id: "F003"})

db.fines.deleteMany({"payment.status": "PAID"})