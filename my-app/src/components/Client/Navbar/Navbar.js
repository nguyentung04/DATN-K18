import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { CgChevronDown } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isLoggedIn = !!username;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src='' alt="Logo" className="logo-image" />
      </Link>
      <div className="navbar-links">
        <Link to="/about">Giới thiệu</Link>
        <Link to="/trend">Xu hướng</Link>
        <div className="dropdown">
          <Link to="/menu" className="dropbtn">Menu <CgChevronDown /></Link>
          <div className="dropdown-content">
            {/* Existing Dropdown Sections */}
            <div className="dropdown-section">
              <h4>Hãng Phổ biến</h4>
              <Link to="/casio">Casio</Link>
              <Link to="/orient">Orient</Link>
              <Link to="/seiko">Seiko</Link>
              <Link to="/citizen">Citizen</Link>
              <Link to="/olympianus">Olympianus</Link>
              <Link to="/bentley">Bentley</Link>
              <Link to="/bulova">Bulova</Link>
              <Link to="/daniel-wellington">Daniel Wellington</Link>
            </div>
            <div className="dropdown-section">
              <h4>Hãng khác</h4>
              <Link to="/carnival">Carnival</Link>
              <Link to="/calvin-klein">Calvin Klein</Link>
              <Link to="/boomest-gatti">Boomest Gatti</Link>
              <Link to="/daniel-klein">Daniel Klein</Link>
              <Link to="/free-look">Free Look</Link>
              <Link to="/seven-friday">SevenFriday</Link>
              <Link to="/versace">Versace</Link>
            </div>
            <div className="dropdown-section">
              <h4>Hàng cao cấp</h4>
              <Link to="/tissot">Tissot</Link>
              <Link to="/frederique-constant">Frederique Constant</Link>
              <Link to="/orient-star">Orient Star</Link>
              <Link to="/longines">Longines</Link>
              <Link to="/omega">Omega</Link>
              <Link to="/certina">Certina</Link>
              <Link to="/ogival">Ogival</Link>
              <Link to="/movado">Movado</Link>
              <Link to="/maurice-lacroix">Maurice Lacroix</Link>
            </div>
            <div className="dropdown-section">
              <h4>Phân loại đồng hồ</h4>
              <Link to="/dai-da-tong-hop">Dây da tổng hợp</Link>
              <Link to="/dai-kim-loai">Dây kim loại</Link>
              <Link to="/co-automatic">Cơ (Automatic)</Link>
              <Link to="/pin-quartz">Pin (Quartz)</Link>
              <Link to="/dien-tu">Điện tử</Link>
              <Link to="/nhat-ban">Nhật Bản</Link>
              <Link to="/thuy-sy">Thụy Sỹ</Link>
              <Link to="/luxury">Luxury (Cao cấp)</Link>
            </div>
            <div className="dropdown-section">
              <h4>Phong cách</h4>
              <Link to="/quan-doi">Quân đội</Link>
              <Link to="/cong-so">Công sở</Link>
              <Link to="/mat-vuong">Mặt vuông</Link>
              <Link to="/giong-rolex">Giống Rolex</Link>
              <Link to="/giong-hublot">Giống Hublot</Link>
              <Link to="/giong-patek-philippe">Giống Patek Philippe</Link>
              <Link to="/giong-richard-mille">Giống Richard Mille</Link>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/men" className="dropbtn">Nam<CgChevronDown /></Link>
          
          <div className="dropdown-content">
            {/* Dropdown Content for "Nam" */}
            <div className="dropdown-section">
              <h4>Mức giá</h4>
              <Link to="/products?price=under-1m">Dưới 1 triệu</Link>
              <Link to="/products?price=1m-3m">Từ 1 triệu - 3 triệu</Link>
              <Link to="/products?price=3m-6m">Từ 3 triệu - 6 triệu</Link>
              <Link to="/products?price=6m-9m">Từ 6 triệu - 9 triệu</Link>
              <Link to="/products?price=above-9m">Trên 9 triệu</Link>
            </div>
            <div className="dropdown-section">
              <h4>Hãng nổi bật</h4>
              <Link to="/products?brand=casio">Casio</Link>
              <Link to="/products?brand=orient">Orient</Link>
              <Link to="/products?brand=seiko">Seiko</Link>
              <Link to="/products?brand=citizen">Citizen</Link>
              <Link to="/products?brand=olympianus">Olympianus</Link>
              <Link to="/products?brand=bentley">Bentley</Link>
              <Link to="/products?brand=frederiqueconstant">Frederique Constant</Link>
              <Link to="/products?brand=tissot">Tissot</Link>
              <Link to="/products?brand=longines">Longines</Link>
              <Link to="/products?brand=omega">Omega</Link>
            </div>
            <div className="dropdown-section">
              <h4>Loại dây</h4>
              <Link to="/products?strap=metal">Dây kim loại</Link>
              <Link to="/products?strap=leather">Dây da tổng hợp</Link>
              <Link to="/products?strap=plastic">Dây nhựa</Link>
              <Link to="/products?strap=rubber">Dây cao su</Link>
            </div>
            <div className="dropdown-section">
              <h4>Loại máy</h4>
              <Link to="/products?movement=automatic">Cơ (Automatic)</Link>
              <Link to="/products?movement=quartz">Pin (Quartz)</Link>
              <Link to="/products?movement=solar">Năng lượng ánh sáng</Link>
            </div>
            <div className="dropdown-section">
              <h4>Dòng đặc biệt</h4>
              <Link to="/products?special=rolex-style">Giống Rolex</Link>
              <Link to="/products?special=hublot-style">Giống Hublot</Link>
              <Link to="/products?special=casio-ltp">Casio LTP</Link>
              <Link to="/products?special=g-shock">G-Shock</Link>
              <Link to="/products?special=baby-g">Baby-G</Link>
              <Link to="/products?special=luxury">Sang chảnh</Link>
              <Link to="/products?special=bracelet">Dây lắc</Link>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/women" className="dropbtn">Nữ <CgChevronDown /></Link>
          <div className="dropdown-content">
            {/* Dropdown Content for "Nữ" */}
            <div className="dropdown-section">
              <h4>Mức giá</h4>
              <Link to="/products?price=under-1m">Dưới 1 triệu</Link>
              <Link to="/products?price=1m-3m">Từ 1 triệu - 3 triệu</Link>
              <Link to="/products?price=3m-6m">Từ 3 triệu - 6 triệu</Link>
              <Link to="/products?price=6m-9m">Từ 6 triệu - 9 triệu</Link>
              <Link to="/products?price=above-9m">Trên 9 triệu</Link>
            </div>
            <div className="dropdown-section">
              <h4>Hãng nổi bật</h4>
              <Link to="/products?brand=casio">Casio</Link>
              <Link to="/products?brand=orient">Orient</Link>
              <Link to="/products?brand=seiko">Seiko</Link>
              <Link to="/products?brand=citizen">Citizen</Link>
              <Link to="/products?brand=olympianus">Olympianus</Link>
              <Link to="/products?brand=bentley">Bentley</Link>
              <Link to="/products?brand=frederiqueconstant">Frederique Constant</Link>
              <Link to="/products?brand=tissot">Tissot</Link>
              <Link to="/products?brand=longines">Longines</Link>
              <Link to="/products?brand=omega">Omega</Link>
            </div>
            <div className="dropdown-section">
              <h4>Loại dây</h4>
              <Link to="/products?strap=metal">Dây kim loại</Link>
              <Link to="/products?strap=leather">Dây da tổng hợp</Link>
              <Link to="/products?strap=plastic">Dây nhựa</Link>
              <Link to="/products?strap=rubber">Dây cao su</Link>
            </div>
            <div className="dropdown-section">
              <h4>Loại máy</h4>
              <Link to="/products?movement=automatic">Cơ (Automatic)</Link>
              <Link to="/products?movement=quartz">Pin (Quartz)</Link>
              <Link to="/products?movement=solar">Năng lượng ánh sáng</Link>
            </div>
            <div className="dropdown-section">
              <h4>Dòng đặc biệt</h4>
              <Link to="/products?special=rolex-style">Giống Rolex</Link>
              <Link to="/products?special=hublot-style">Giống Hublot</Link>
              <Link to="/products?special=casio-ltp">Casio LTP</Link>
              <Link to="/products?special=g-shock">G-Shock</Link>
              <Link to="/products?special=baby-g">Baby-G</Link>
              <Link to="/products?special=luxury">Sang chảnh</Link>
              <Link to="/products?special=bracelet">Dây lắc</Link>
            </div>
          </div>
        </div>
        <Link to="/couple">Cặp đôi</Link>
        <Link to="/premium">Cũ cao cấp</Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
        <CiSearch />
      </div>
      
      <div className="navbar-auth">
        
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i> Giỏ hàng
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/orderhistory" className="order-history-link">Đơn hàng</Link>
            <span className="navbar-username">Xin chào | {username}</span>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/signin" className='login'>Đăng nhập</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;