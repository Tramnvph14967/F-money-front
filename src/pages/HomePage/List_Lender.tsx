import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';
import { UserType } from '../../models/users';
import useLender from './../../hook/usersHomePage';

import { bindActionCreators } from 'redux';
import { formatDate } from './../../ultils/formatDate';


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    phone: string;
    email: string;
    interest: string;
    address: string;
}


const List_Lender = () => {
    const { data: DataType, error } = useLender()
    console.log(DataType?.data.users);


    // lọc dữ liệu role

    // const data =  DataType?.data.users.filter((item:any)=>item.role=="userLender")


    let dataFilter = DataType?.data.users.map((item: any) => {
        return {
            text: item.address,
            value: item.address
        }
    })
    // dataFilter?.filter((item, index) => {

    //     console.log(
    //         // a. Item
    //         item,
    //         // b. Index
    //         index, 
    //         // c. indexOf
    //         dataFilter?.filter.indexOf(item),
    //         // d. Condition
    //         dataFilter?.filter.indexOf(item) === index,
    //    );

    //    return dataFilter?.filter.indexOf(item) === index
    // });
    // dataFilter?.filter((item, index) => {
    //    return dataFilter.indexOf(item.value) != index
    // });

    const columns: ColumnsType<DataType> = [
        {
            title: <strong>STT</strong>,
            dataIndex: 'key',
            width: 30,
            render: (key) => {
                return <span className="">{key}</span>
            }
        },
        {
            title: <strong>Họ và tên</strong>,
            dataIndex: 'name',
            width: '20%',
            render: (name) => {
                return <span className="">{name}</span>
            }
        },

        {
            title: <strong>Ngày sinh</strong>,
            dataIndex: 'birthDay',
            width: '15%',
            render: (birthDay) => {
                return <span className="">{formatDate(birthDay)}</span>
            }
        },
        {
            title: <strong>Số điện thoại</strong>,
            dataIndex: 'phone',
            width: '10%',
            render: (phone) => {
                return <span className="">{phone}</span>
            }
        },
        {
            title: <strong>Email</strong>,
            dataIndex: 'email',
            width: '20%',
            render: (email) => {
                return <span className="">{email}</span>
            }
        },
        {
            title: <strong>Lãi Xuất</strong>,
            dataIndex: 'interest',
            filters: [
                {
                    text: '5%',
                    value: '5%',
                },
                {
                    text: '2%',
                    value: '2%',
                },
            ],
            onFilter: (value: string, record) => record.interest.startsWith(value),
            filterSearch: true,
            width: '10%',
            render: (interest) => {
                return <span className="">{interest}</span>
            }
        },
        {
            title: <strong>Địa chỉ</strong>,
            dataIndex: 'address',
            filters:
                dataFilter
            ,
            onFilter: (value: string, record) => record.address.includes(value),
            filterSearch: true,
            width: '40%',
            render: (address) => {
                return <span className="">{address}</span>
            }
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (

        <>
            <h1 className='text-2xl font-bold text-orange-600 p-4'>Danh Sách Các Nhà Cho Vay Vốn</h1>
            <Table columns={columns} dataSource={DataType?.data?.users} onChange={onChange} />
        </>


    )
}

export default List_Lender