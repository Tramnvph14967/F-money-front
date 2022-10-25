import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Select } from "antd";
import InfoManyCutomers from "../../components/Lender/credit/InfoManyCutomers";
import ContractCustomer from "../../components/Lender/credit/ContractCustomer";
import SearchContractCustomer from "../../components/Lender/credit/SearchContractCustomer";
import Breadcrumb from "../../components/Lender/credit/Breadcrumb";
import ModalCreateContract from "../../components/Lender/credit/ModalCreateContract";
import InstallmentCustomer from "../../components/Lender/Customer/DebitCustomers/InstallmentCustomer";

type Props = {};

const Installment = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const ReshowModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
  
  return (
    <>
        <ModalCreateContract isModalOpen={isModalOpen} showModal={showModal} ReshowModal={ReshowModal}/>
        {/* <ModalCredit> */}
        <div className="p-3">
          <div
            style={{
              boxShadow: "0px 1px 15px 1px rgb(69 65 78 / 8%)",
              WebkitBoxShadow: "0px 1px 15px 1px rgb(69 65 78 / 8%)",
              MozBoxShadow: "0px 1px 15px 1px rgba(69, 65, 78, 0.08)",
            }}
            className="bg-white rounded shadow-lg mb-9"
          >
          <Breadcrumb/>
          <div className="decoration-gray-500 pt-3 p-9 ">
            <div className="flex flex-wrap mx-4">
              <InfoManyCutomers/>
              <ContractCustomer showModal={showModal}/>
              <SearchContractCustomer/>
              <Button
                onClick={showModal}
                type="primary"
                style={{
                  background: "#36a3f7",
                  borderColor: "#36a3f7",
                  margin: "10px 0",
                  textAlign: "center",
                }}
              >
                {<SearchOutlined />} Tìm kiếm
              </Button>
              <InstallmentCustomer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Installment;
