import React from "react";
import SectionHead from "../../common/SectionHead";
import UsersTable from "../../Tables/UsersTable";


const AllUsers = () => {
  return (
    <>
      <SectionHead title={'All Users'}/>
      {/** Users Table */}
      <UsersTable/>

    </>


  );
};

export default AllUsers;
