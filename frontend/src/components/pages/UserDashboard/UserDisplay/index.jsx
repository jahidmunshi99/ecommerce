import React from 'react'
import UserAddress from './UserAddress'
import ProductOrderLists from './ProductOrderLists'
import UserProfileInfo from './UserProfile'
import WishList from './WishList'

const UserDisplay = ({menuControl}) => {

  const { activeTab } = menuControl

  switch (activeTab) {
    case 'profile':           
      return <UserProfileInfo/>;

    case 'address':           
      return <UserAddress/>;

    case 'mylist':           
      return <WishList/>;

    case 'order' :
      return <ProductOrderLists/>

    default:
      return <UserProfileInfo/>
  }
}

export default UserDisplay