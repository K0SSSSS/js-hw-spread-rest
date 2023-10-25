const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
  
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
  
      this.items = this.items.filter((item) => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
  };
  
  invokeInventoryAction("Medkit", (item) => inventory.add(item));
  // Adding Medkit to inventory
  
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  
  invokeInventoryAction("Gas mask", (item) => inventory.remove(item));
  console.log(inventory.items); // ['Knife', 'Medkit']
  // Removing Gas mask from inventory

  