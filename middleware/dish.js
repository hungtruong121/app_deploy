function findDishes(foods, dishes){
    let menu = [];
    foods.forEach((food, index) => {
        let isSelected = true;
        dishes.forEach((dish, index2) => {
            const reg = new RegExp(dish.main_ingredient, 'gi');
            if(food.indexOf(food.match(reg)) != -1 && isSelected){
                if(menu.find(dish.menu)){
                    menu.push(dish.menu);
                }
                isSelected = false;
            }
        });
    });
    return menu;
}