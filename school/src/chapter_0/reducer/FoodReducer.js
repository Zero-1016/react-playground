export default function FoodReducer(user, action) {
  switch (action.type) {
    case "added": {
      const { new_age, new_food } = action;
      return {
        ...user,
        favorites: [...user.favorites, { class: new_age, food: new_food }],
      };
    }
    case "updated": {
      const { new_age, new_food } = action;
      return {
        ...user,
        favorites: [
          ...user.favorites.map((favorite) => {
            return favorite.class === new_age ? { ...favorite, food: new_food } : favorite;
          }),
        ],
      };
    }
    case "delete": {
      const { delete_age } = action;
      return {
        ...user,
        favorites: [
          ...user.favorites.filter((favorite) => {
            return favorite.class !== delete_age;
          }),
        ],
      };
    }
    default: {
    }
  }
}
