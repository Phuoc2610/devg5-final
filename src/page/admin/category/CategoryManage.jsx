import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import AddCategory from './AddCategory';
const CategoryManage = () => {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  const columns = [
    {
      name: "Id",
      selector: row => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
      center: true,
    },
    {
      name: 'Action',
      center: true,
      cell: (row) => (
        <div>
          <button
            className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
            onClick={() => handleEdit(row)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
        </div>
      ),
    }
  ]
  const data = [
    {
      id: 1,
      name: "phuoc",
      email: "phuoc@gmail.com",
      age: "21"
    },
    {
      id: 2,
      name: "huy",
      email: "huy@gmail.com",
      age: "22"
    },
    {
      id: 3,
      name: "phong",
      email: "phong@gmail.com",
      age: "23"
    }, {
      id: 4,
      name: "cuong",
      email: "cuong@gmail.com",
      age: "24"
    },
    {
      id: 5,
      name: "vinh",
      email: "vinh@gmail.com",
      age: "25"
    },
    {
      id: 6,
      name: "dat",
      email: "dat@gmail.com",
      age: "26"
    }, {
      id: 7,
      name: "phong",
      email: "phong@gmail.com",
      age: "23"
    }, {
      id: 8,
      name: "cuong",
      email: "cuong@gmail.com",
      age: "24"
    },
    {
      id: 9,
      name: "vinh",
      email: "vinh@gmail.com",
      age: "25"
    },
    {
      id: 10,
      name: "dat",
      email: "dat@gmail.com",
      age: "26"
    },
    {
      id: 11,
      name: "phong",
      email: "phong@gmail.com",
      age: "23"
    }, {
      id: 12,
      name: "cuong",
      email: "cuong@gmail.com",
      age: "24"
    },
    {
      id: 13,
      name: "vinh",
      email: "vinh@gmail.com",
      age: "25"
    },
    {
      id: 14,
      name: "dat",
      email: "dat@gmail.com",
      age: "26"
    }
  ]
  const handleEdit = (row) => {
    alert(`Edit user: ${row.name}`);
  };

  const handleDelete = (row) => {
    const confirm = window.confirm(`Are you sure you want to delete ${row.name}?`);
    if (confirm) {
      alert(`User ${row.name} has been deleted.`);
    }
  };
  return (
    <div>
      <h1 className="grid place-items-center text-4xl my-4">Manage Category</h1>
      <button
        className="btn-add my-2 ml-6 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsAddCategoryOpen(true)}
      >
        Add category
      </button>
      <div className="w-[70%] mx-auto border border-gray-300 rounded-md shadow-md">
        <div className="overflow-hidden">
          <DataTable
            columns={columns}
            data={data}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            pagination
            paginationPosition="bottom"
          />
        </div>
      </div>
      {isAddCategoryOpen && (
        <AddCategory onClose={() => setIsAddCategoryOpen(false)} />
      )}
    </div>
  )
}

export default CategoryManage