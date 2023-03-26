export default function PersonReducer(user, action) {
  switch (action.type) {
    case "added": {
      const { age, food } = action;
      return {
        ...user,
        favorites: [...user.favorites, { class: age, food }],
      };
    }

    case "updated": {
      const { age, new_food } = action;
      return {
        ...user,
        favorites: [
          ...user.favorites.map((favorite) => {
            return favorite.class === age ? { ...favorite, food: new_food } : favorite;
          }),
        ],
      };
    }
    case "deleted": {
      const { age } = action;
      return {
        ...user,
        favorite: [
          ...user.favorites.filter((favorite) => {
            return favorite.class !== age;
          }),
        ],
      };
    }
    default: {
      return `잘못된 요청입니다.`;
    }
  }
}
