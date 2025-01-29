let obj = {
    name: "Vasya",
    friends: 5,
    likes: 19,
    projects: 7,
    getSumAllNumbers: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === "number") {
                sum += this[key];
            }
        }
        return sum;
    },
    getSortedKeys: function () {
        let keys = [];
        let result = [];
        for (let key in this) {
            if (typeof this[key] === "number") {
                keys.push({ [key]: this[key] });
            }
        }
        keys.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
        keys.forEach((obj) => {
          result.push(Object.keys(obj)[0]);
      });

        return result;
    },
};
