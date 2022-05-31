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
  let rows = data.map((item, index) => {
    return {
      id: item.id,
      title: item.title,
      thumbnail: (
        <div className="flex justify-center">
          <img src={item.thumbnailUrl} width="50px" height="50px" alt="" />
        </div>
      ),
      numeric: 1,
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
      id: "checkbox",
      label: "checkbox",
      numeric: false,
      width: "",
    },
    {
      id: "thumbnail",
      label: "Image",
      numeric: false,
      width: "10px",
    },
    {
      id: "title",
      label: "Title",
      numeric: false,
      width: undefined,
    },
    {
      id: "numeric",
      label: "SampleNumberic",
      numeric: true,
      width: "10%",
    },
  ];

  return columns;
};
