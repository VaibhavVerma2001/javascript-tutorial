const data = {
  ok: true,
  media: {
    id: 1,
    url: "abc.com",
    price: {
      cp: 100,
      sp: 150,
      discount: 50,
    },
    isDeleted: true,
  },
};

// 1 --
// const {ok, media} = data;
// console.log({ok , media});

// 2 --
// const {
//   ok,
//   media: { id, url, price, isDeleted },
// } = data;

// console.log({id, url, price, isDeleted});

// 3 --
// const {
//   ok,
//   media: {
//     id,
//     url,
//     price: { cp, sp, discount },
//     isDeleted,
//   },
// } = data;

// console.log({ id, url, cp, sp, discount, isDeleted });

// 4 --
const {
  ok,
  media: {
    id,
    url,
    price: { cp: costPrice, sp: sellingPice, discount },
    isDeleted,
  },
} = data;

console.log({ costPrice, sellingPice, discount });
