import pymongo

client = pymongo.MongoClient(
    "mongodb+srv://admin:admin@portfolio.ha94cqk.mongodb.net/test"
)

portfolio = client["portfolio"]


projects = portfolio["projects"]

sk = [
    {
        "name": "E-Commerce Website",
        "items": [
            "Built backend of E-commerce website",
            "Coded using Django framework",
        ],
    },
    {
        "name": "NFT COLLECTION AND MINTING SITE",
        "items": [
            "Built Smart Contract using ERC721 standard in Solidity",
            "Built frontend with React and integrated contract using Ethers",
        ],
    },
    {
        "name": "Decentralized Storage System",
        "items": [
            "Built using Solidity, React and IPFS",
            "Utilized various cryptographic algorithm like AES, ECC(Public Key Cryptography) for secure file storage in IPFS",
            "Used Smart Contract for saving File Identifier, and used Ethers for frontend integration",
        ],
    },
]


x = projects.insert_many(sk)
print(x.inserted_ids)

print(client.server_info())
