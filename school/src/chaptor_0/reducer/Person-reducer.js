export default function PersonReducer(person, action) {
  switch (action.type) {
    case "added": {
      const { age, food } = action;
      return {
        ...prev,
        favorites: [...prev.favorites, { class: age, food }],
      };
    }

    case "updated": {
      const { age, new_food } = action;
      return {
        ...prev,
        favorites: [
          ...prev.favorites.map((favorite) => {
            return favorite.class === age ? { ...favorite, food: new_food } : favorite;
          }),
        ],
      };
    }
    case "deleted": {
      const { age } = action;
      return {
        ...prev,
        favorite: [
          ...prev.favorites.filter((favorite) => {
            favorite.class !== age;
          }),
        ],
      };
    }
    default: {
      return `잘못된 요청입니다.`;
    }
  }
}
