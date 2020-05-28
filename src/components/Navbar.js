import React, { Component } from 'react';
//import { Link, animateScroll as scroll } from "react-scroll";
import {Link} from 'react-scroll';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show:false,
          menuItems : [
          {name : "O mnie", path:"About"},
          {name : "Projekty", path:"Projects"},
          {name : "Umiejętności", path:"Skills"},
          {name : "Kontakt", path:"Contact"}]
        };
      }
      componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
        console.log(window.scrollY);
    }

     componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
         console.log(window.scrollY + this.state.visibleNavBar);
    }
    // hideBar = (e) =>{
    //     const {hiddenNavBar} = this.state
    //     window.scrollY > 100 ? 
    //      this.setState({ hiddenNavBar: true })
    //     :
    //      this.setState({ hiddenNavBar: false });
        
    // }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { console.log("bottom"); }
      }
    toggleShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    
    
    render() { 
        const menuItemsMap=this.state.menuItems.map(item =>(
            <li  className="nav-item"  key={item.name} ><Link
                    
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset= {item.path === "Contact" ? -300 : -50}
                    duration={500}
                    onClick={this.toggleShow}
                    
                >{item.name} </Link></li>
        )) ;
    
        
        return (
        <div className={`nav-bar ${this.state.hiddenNavBar ? "visible" : ""}`} onScroll={this.handleScroll}>
            <div className="logoPic"><img src="/logo1.png" height="55px" width="55px" alt="logo" /></div>
            <div className="logo">
                <span className="logoName"> Sebastian Dubaj</span>
                <span className="logoTitle">Portfolio</span>
            </div>
            <div id="nav-icon1" className={` ${this.state.show ? "open" : ""}`} onClick={this.toggleShow}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`menu ${this.state.show ? "open" : ""}`}>
                <ul className="list">
                    {menuItemsMap}
                </ul>
            </div>

            

            {/* <div id="mySidenav" className = {this.state.show ? "sidenav open": "sidenav"}>
                
                <a href="javascript:void(0)" classNAme="closebtn" onClick={this.toggleShow}>&times;</a>
                <ul className="list-unstyled">
                {menuItemsMap}
                </ul>
            </div> */}
        </div>


//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//            <div className="d-flex flex-grow-1">
//         <span className="w-100 d-lg-none d-block"></span>
//         <a className="navbar-brand" href="#">
//             Portfolio
//         </a>
//         <div className="w-100 text-right">
//             <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#myNavbar7" onClick={this.toggleShow}>
//             <span class="icon-bar top-bar"></span>
// 	        <span class="icon-bar middle-bar"></span>
// 	        <span class="icon-bar bottom-bar"></span>	
//             </button>
//         </div>
//     </div>
//     <div className="collapse navbar-collapse  text-right" id="myNavbar7">
//             <ul className="navbar-nav ml-auto flex-nowrap">
//                 {menuItemsMap}
//             </ul>
//             {consoleItems}
//     </div>
// </nav>
        
        );
    }
}
 
export default Navbar;