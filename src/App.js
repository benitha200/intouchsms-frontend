import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Website/Navbar/Navbar';
import Home from './components/Website/Home/Home';
import Footer from './components/Website/Footer/Footer';
import Login from './components/Website/Login/Login';
// import Homepage from './components/Dashboard/Homepage';
// import Sidebar from './components/Dashboard/SideBar';

import { ProSidebarProvider } from 'react-pro-sidebar';
import DashboardNavbar from './components/Dashboard/DashboardNav/DashboardNavbar';
import MyProfile from './components/Dashboard/AccountInfo/MyProfile/MyProfile';
import MainLayout from './components/Dashboard/MainLayout/MainLayout';
import Header from './components/Dashboard/Header/Header';
import MyClients from './components/Dashboard/AccountInfo/MyClients/MyClients';
import MyCreditTransfers from './components/Dashboard/AccountInfo/MyCreditTransfers/MyCreditTransfers';
import MyTransactions from './components/Dashboard/AccountInfo/MyTransactions/MyTransactions';
import Send from './components/Dashboard/Messaging/Send/Send'
import MyAccountInfo from './components/Dashboard/AccountInfo/MyAccountInfo/MyAccountInfo.jsx/MyAccountInfo';
import AddressBook from './components/Dashboard/AddressBook/AddressBook';
import Contacts from './components/Dashboard/AddressBook/Contacts/Contacts';
import Groups from './components/Dashboard/AddressBook/Groups/Groups';
import Messaging from './components/Dashboard/Messaging/Messaging';
import Custom from './components/Dashboard/Messaging/Custom/Custom'
import AccountInfo from './components/Dashboard/AccountInfo/AccountInfo';
import { useState } from 'react';
import SignUp from './components/Website/SignUp/SignUp';
import { TOKEN } from './Constants/Index';
import Loginn from './components/Website/Login/Loginn';


function App() {
  const [token,setToken] = useState('')
  console.log(token)

  if(token){

  return (

    // <BrowserRouter>
    //     <Navbar/>

    // <Routes>
    //   {/* before login */}
    //     <Route index element={<Home/>}/>
    //     <Route path='overview' element={<Home/>}/>
    //     <Route path='httpapi' element={<Home/>}/>
    //     <Route path='smppaccess' element={<Home/>}/>
    //     <Route path='pricing' element={<Home/>}/>
    //     <Route path='login' element={<Login/>}/>
    //     <Route path='createaccount' element={<Home/>}/>

    //     {/* after login */}

    //     {/* <Route path='homepage' element={<Homepage/>}/> */}
    // </Routes>
    // <Footer/>

    // </BrowserRouter>
    <div id='app'>
      <BrowserRouter>     
        <Header token={token}/>
        <div className='all' style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className='sidebar-menu'>
            <DashboardNavbar style={{ position: 'relative', top: '0px' }} />
          </div>
          <div className='page-contents'>
            {/* <MyAccountInfo/> */}
            <Routes>
              <Route path='/account-info' element={<AccountInfo token={token}/>}>
                <Route path='/account-info/' element={<MyProfile token={token}/>}/>
                <Route path='/account-info/my-clients' element={<MyClients />} />
                <Route path='/account-info/my-credit-transfers' element={<MyCreditTransfers />} />
                <Route path='/account-info/my-transactions' element={<MyTransactions />} />
                <Route path='/account-info/send' element={<Send />} />
              </Route>

              <Route path='/address-book' element={<AddressBook />}>
                <Route path='/address-book/' element={<Contacts />} />
                <Route path='/address-book/groups' element={<Groups />} />
              </Route>
              <Route path='/messaging' element={<Messaging />}>
                <Route index path='/messaging/' element={<Send />} />
                <Route path='/messaging/custom' element={<Custom />} />
                <Route path='/messaging/custom' element={<Custom />} />
                <Route path='/messaging/custom' element={<Custom />} />
              </Route>
              {/* <Route index element={<MainLayout/>}/> */}
            </Routes>
          </div>



          {/* <Outlet/> */}
        </div>


      </BrowserRouter>
    </div>

  )
}
else{
    return (
    <div id='website'>
       <BrowserRouter>
         <Navbar/>
        <Routes>
       {/* before login */}
         <Route index element={<Home/>}/>
         <Route path='overview' element={<Home/>}/>
         <Route path='httpapi' element={<Home/>}/>
         <Route path='smppaccess' element={<Home/>}/>
         <Route path='pricing' element={<Home/>}/>
         <Route path='login' element={<Login setToken={setToken}/>}/>
         <Route path='createaccount' element={<SignUp/>}/>

         {/* after login */}

         {/* <Route path='homepage' element={<Homepage/>}/> */}
     </Routes>
     <Footer/>

     </BrowserRouter>

    </div>

  )
}


}

export default App;
