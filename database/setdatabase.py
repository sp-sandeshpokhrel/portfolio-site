import pymongo

client = pymongo.MongoClient(
    "mongodb+srv://admin:admin@portfolio.ha94cqk.mongodb.net/test"
)

portfolio = client["portfolio"]


x = projects.insert_many(sk)
print(x.inserted_ids)

print(client.server_info())
