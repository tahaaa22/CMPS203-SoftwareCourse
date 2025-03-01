var items = [], transactions = [], itemCategories = [], itemFields = {};

const commands = {
    addItem: 1,
    editItem: 2,
    removeItem: 3,
    sale: 4,
    restock: 5,
    search:6,
    viewItem:7,
    exportAll:8,
    viewItemAge:9,
    addField:10,
    import:11,
    updateCustomField:12,
    viewAllTransactions:13
};
function addItem(itemDetails) {
    var item = {
        name: itemDetails[0], category: itemDetails[1], quantity: itemDetails[2],
        price: itemDetails[3], unit: itemDetails[4],
        addedAt: new Date(), customField: itemDetails[5] || {}
    };
    //push new item to array
    items.push(item);
    if (!itemCategories.includes(itemDetails[1])) {
        itemCategories.push(itemDetails[1]);
    }
    //add transaction 
    transactions.push({ type: commands.addItem, item });
}
function editItem(itemDetails) {
    //add the new transaction item 
    transactions.push({ type: commands.editItem, old: items[itemDetails[0]], new: itemDetails.slice(1) });
    //updating the item in the list
    items[itemDetails[0]] = {
        ...items[itemDetails[0]], name: itemDetails[1],
        category: itemDetails[2], quantity: itemDetails[3], price: itemDetails[4],
        unit: itemDetails[5], customField: itemDetails[6] || {}
    };
    //alerting low quantity
    if (items[itemDetails[0]].quantity < 10) {
        console.log(`Item ${items[itemDetails[0]].name} is below 10 units! Current quantity:${items[itemDetails[0]].quantity}`)
    }
}
function removeItem(itemDetails) {
    transactions.push({ type: commands.removeItem, item: items[itemDetails[0]] });
    items.splice(itemDetails[0], 1);
    //alerting low quantity
    if (items[itemDetails[0]].quantity < 10) {
        console.log(`Item ${items[itemDetails[0]].name} is below 10 units! Current quantity:${items[itemDetails[0]].quantity}`)
    }
}
function saleEvent(item, itemDetails) {
    item.quantity -= itemDetails[1];
    //add sale transaction 
    transactions.push({ type: commands.sale, item: item, quantitySale: itemDetails[1], d: new Date() });
    //log the event
    console.log(`Sold ${itemDetails[1]} ${item.unit} of ${item.name}`);
}
function restock(item, itemDetails) {
    item.quantity += itemDetails[1];
    //add restock transaction to array
    transactions.push({ type: commands.restock, item: item, quantityRemaining: itemDetails[1], d: new Date() });
    console.log(`Restocked ${itemDetails[1]} ${item.unit} of ${item.name}`);
}
//
function processInventoryCommand(command, itemDetails) {
    // handle inventory changes
    if (command === commands.addItem) {
        addItem(itemDetails)
    } else if (command === commands.editItem && items[itemDetails[0]]) {
        editItem(itemDetails)
    } else if (command === commands.removeItem && items[itemDetails[0]]) {
        removeItem(itemDetails)
    }

    // alert inventory changes
    if ([commands.editItem, commands.removeItem, commands.addItem].includes(command)) {
        console.log("=== Dashboard ===\nItems: " + items.length +
            "\nTotal: $" + items.reduce((tot, x) => tot + x.quantity * x.price, 0).toFixed(2) +
            "\nCategories: " + itemCategories.join(', '));
    }
    // handle inventory events
    if ([commands.sale, commands.restock].includes(command)) {
        for (let item of items) {
            if (item.name === itemDetails[0]) {
                if (command === commands.sale && item.quantity >= itemDetails[1]) {
                    saleEvent(item, itemDetails)
                } else if (command === commands.restock) {
                    restock(item, itemDetails)
                }
                break;
            }
        }
    }

    // handle user actions
    if (command === commands.search) {
        console.log(items.filter(x => [x.name, x.category, x.price].some(v => v.toString().toLowerCase().includes(itemDetails[0].toLowerCase()))));
    }
    if (command === commands.viewItem) {
        console.log("=== Inventory ===", items);
    }
    if (command === commands.exportAll) {
        console.log("CSV:\n" + ["Name,Category,Quantity,Price,Unit,AddedAt"].concat(items.map(x => Object.values(x).join(','))).join('\n'));
    }
    if (command === commands.viewAllTransactions) {
        console.log("Transactions:\n", transactions);
    }
    if (command === commands.viewItemAge) {
        console.log(items.map(x => `${x.name}: ${Math.floor((new Date() - new Date(x.addedAt)) / (1000 * 60 * 60 * 24))}d`).join('\n'));
    }
    if (command === commands.import) {
        itemDetails[0].forEach(x => processInventoryCommand(commands.addItem, [x.name, x.category, x.quantity, x.price, x.unit]));
    }
    if (command === commands.addField && !itemFields[itemDetails[0]]) {
        itemFields[itemDetails[0]] = null;
    }
    if (command === commands.updateCustomField) {
        items.find(x => x.name === itemDetails[0])?.customField[itemDetails[1]] = itemDetails[2];
    }
}
