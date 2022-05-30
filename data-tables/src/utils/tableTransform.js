// rows={[{
//     'id': some_id1,
//     'product': (React.ReactNode | string | number), // Key is column id and value is
//     'price': 15.2
//     }, {
//     'id': some_id2,
//     'product': (React.ReactNode | string | number),
//     'price': '$15.5'
//     }]}
export const tableDataTransform = (data) => {
  console.debug("data", data);
  let rows = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image: item.thumbnailUrl,
    };
  });
  return rows;
};

// columns={[{
//     'id': 'product', // Uniq ID to identify column
//     'label': 'Product',
//     'numeric': false,
//     'width': ('10px' | '10%' | '' | undefined),
//     }]},

export const tableColumnTransform = () => {
  let columns = [
    {
      id: "id",
      label: "checkbox",
      numeric: false,
      width: "10%",
    },
    {
      id: "thumbnail",
      label: "Image",
      numeric: false,
      width: "10%",
    },
    {
      id: "title",
      label: "Title",
      numeric: false,
      width: "10%",
    },
  ];
  // let column = data.map((item) => {
  //   return {
  //     id: item.id, // Uniq ID to identify column
  //     label: item.label,
  //     numeric: item.isNumeric,
  //     width: item.width,
  //   };
  // });
  return columns;
};
