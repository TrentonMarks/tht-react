// Import React, React Router, Stylesheets, Components, Config
import React, { Component } from 'react'; // React
import { // React Router
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopTopNavRegion from './Components/TopTopNav/TopTopNavRegion'; // Component
import HeaderRegion from './Components/Header/HeaderRegion'; // Component
import HeroRegion from './Components/Hero/HeroRegion'; // Component
import MainSection from './Components/Main/MainSection'; // Component
import TestimonialsRegion from './Components/Testimonials/TestimonialsRegion'; // Component
import FooterRegion from './Components/Footer/FooterRegion'; // Component
import config from './config'; // Config
import './App.css'; // Stylesheet

// URLs To Json APIs
const API_ROOT = `${config.base}jsonapi/`; // JSON API Root
const TOPTOPNAV_URL = `${config.base}entity/menu/top-top-nav/tree`; // to Top Top Nav
const HEADERPHONE_URL = `${API_ROOT}block_content/basic/397c9fa5-f52d-4412-8e4f-7fcca8a61077`; // to Header Phone
const MAINMENU_URL = `${config.base}entity/menu/main/tree`; // to Main Menu
const HERO_URL = `${API_ROOT}block_content/basic/e5341de9-66fc-4e0c-aced-cc31037e31f5`; // to Hero
const CALLOUTS_URL = `${API_ROOT}block_content/basic/9cc2df76-b2c7-4723-97f5-ceb20b0730e9`; // to Callouts
const BASIC_URL = `${API_ROOT}node/basic`; // to Basic Page
const SERVICE_URL = `${API_ROOT}node/service`; // to Service Page
const SIDEBAR_URL = `${API_ROOT}block_content/basic/3ecd9095-5cae-4090-8c49-c13f2588f501`; // to Right Column CTA
const WEBFORM_URL = `${API_ROOT}webform/webform/69f5e66f-0647-427a-82ff-309d6ab3e706`; // to Webform
const TESTIMONIALS_URL = `${API_ROOT}block_content/basic/19aac192-eba1-402e-890a-c1489b4f4130`; // to Testimonials
const FOOTER_URL = `${API_ROOT}block_content/basic/30df225e-06be-44ed-9605-b4cd981e2ea8`; // to Footer
const COPYRIGHT_URL = `${API_ROOT}block_content/basic/64eea71f-bf40-4bf9-88b7-72da8c9f747c`; // to Copyright

const FRONTEND_URL = 'https://tht-react.trentmarks.dev/';

const HOME_URL = `${FRONTEND_URL}home-page`;
const CONTACTUS_URL = `${FRONTEND_URL}contact-us`;
if (window.location.href === HOME_URL) {
  window.location = `${FRONTEND_URL}`;
}

class App extends Component{
  constructor(){
    super();
    // Set State
    this.state = {
      isHomePage: null,
      isContactUsPage: false,
      topTopNav: null,
      headerPhone: null,
      mainMenu: null,
      hero: null,
      callouts: null,
      basic: null,
      service: null,
      sidebar: null,
      webform: null,
      footer: null,
      copyright: null,
      contentType: ''
    };
    // Load Methods
    this.loadTopTopNav = this.loadTopTopNav.bind(this);
    this.loadHeaderPhone = this.loadHeaderPhone.bind(this);
    this.loadMainMenu = this.loadMainMenu.bind(this);
    this.loadHero = this.loadHero.bind(this);
    this.loadCallouts = this.loadCallouts.bind(this);
    this.loadBasic = this.loadBasic.bind(this);
    this.loadService = this.loadService.bind(this);
    this.loadSidebar = this.loadSidebar.bind(this);
    this.loadWebform = this.loadWebform.bind(this);
    this.loadTestimonials = this.loadTestimonials.bind(this);
    this.loadFooter = this.loadFooter.bind(this);
    this.loadCopyright = this.loadCopyright.bind(this);
    // Update Methods
    this.updatetopTopNav = this.updatetopTopNav.bind(this);
    this.updateHeaderPhone = this.updateHeaderPhone.bind(this);
    this.updateMainMenu = this.updateMainMenu.bind(this);
    this.updateHero = this.updateHero.bind(this);
    this.updateCallouts = this.updateCallouts.bind(this);
    this.updateBasic = this.updateBasic.bind(this);
    this.updateService = this.updateService.bind(this);
    this.updateSidebar = this.updateSidebar.bind(this);
    this.updateWebform = this.updateWebform.bind(this);
    this.updateTestimonials = this.updateTestimonials.bind(this);
    this.updateFooter = this.updateFooter.bind(this);
    this.updateCopyright = this.updateCopyright.bind(this);
    // Misc Methods
    this.findContentType = this.findContentType.bind(this);
    this.checkIfHomePage = this.checkIfHomePage.bind(this);
    this.checkIfContactUsPage = this.checkIfContactUsPage.bind(this);
  }
  componentDidMount(){
    // Load Components.
    this.loadTopTopNav();
    this.loadHeaderPhone();
    this.loadMainMenu();
    this.loadHero();
    this.loadCallouts();
    this.loadBasic();
    this.loadService();
    this.loadSidebar();
    this.loadWebform();
    this.loadTestimonials();
    this.loadFooter();
    this.loadCopyright();
    this.checkIfHomePage();
    this.checkIfContactUsPage();
    this.findContentType();
  }
  loadTopTopNav(){
    // Fetch Top Top Nav.
    fetch(TOPTOPNAV_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updatetopTopNav(data))
      .catch(error => console.log('Fetching Top Top Nav Failed', error));
  }
  updatetopTopNav(responseData){
    this.setState({ topTopNav: responseData });
  }
  loadHeaderPhone(){
    // Fetch HeaderPhone.
    fetch(HEADERPHONE_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateHeaderPhone(data))
      .catch(error => console.log('Fetching Header Phone Failed', error));
  }
  updateHeaderPhone(responseData){
    this.setState({ headerPhone: responseData.data });
  }
  loadMainMenu(){
    // Fetch Main Menu.
    fetch(MAINMENU_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateMainMenu(data))
      .catch(error => console.log('Fetching Main Menu Failed', error));
  }
  updateMainMenu(responseData){
    this.setState({ mainMenu: responseData });
  }
  loadHero(){
    // Fetch Hero.
    fetch(HERO_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateHero(data))
      .catch(error => console.log('Fetching Hero Failed', error));
  }
  updateHero(responseData){
    this.setState({ hero: responseData.data });
  }
  loadCallouts(){
    // Fetch Callouts.
    fetch(CALLOUTS_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateCallouts(data))
      .catch(error => console.log('Fetching Callouts Failed', error));
  }
  updateCallouts(responseData){
    this.setState({ callouts: responseData.data });
  }
  loadBasic(){
    // Fetch Page Content.
    fetch(BASIC_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateBasic(data))
      .catch(error => console.log('Fetching Page Content Failed', error));
  }
  updateBasic(responseData){
    this.setState({ basic: responseData.data });
  }
  loadService(){
    // Fetch Page Content.
    fetch(SERVICE_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateService(data))
      .catch(error => console.log('Fetching Page Content Failed', error));
  }
  updateService(responseData){
    this.setState({ service: responseData.data });
  }
  loadSidebar(){
    // Fetch Sidebar.
    fetch(SIDEBAR_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateSidebar(data))
      .catch(error => console.log('Fetching Sidebar Failed', error));
  }
  updateSidebar(responseData){
    this.setState({ sidebar: responseData.data });
  }
  loadWebform(){
    // Fetch Webform.
    fetch(WEBFORM_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateWebform(data))
      .catch(error => console.log('Fetching Webform Failed', error));
  }
  updateWebform(responseData){
    this.setState({ webform: responseData.data });
  }
  loadTestimonials(){
    // Fetch Testimonials.
    fetch(TESTIMONIALS_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateTestimonials(data))
      .catch(error => console.log('Fetching Testimonials Failed', error));
  }
  updateTestimonials(responseData){
    this.setState({ testimonials: responseData.data });
  }
  loadFooter(){
    // Fetch Footer.
    fetch(FOOTER_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateFooter(data))
      .catch(error => console.log('Fetching Footer Failed', error));
  }
  updateFooter(responseData){
    this.setState({ footer: responseData.data });
  }
  loadCopyright(){
    // Fetch Copyright.
    fetch(COPYRIGHT_URL, { mode:'cors' })
      .then(response => response.json())
      .then(data => this.updateCopyright(data))
      .catch(error => console.log('Fetching Copyright Failed', error));
  }
  updateCopyright(responseData){
    this.setState({ copyright: responseData.data });
  }
  findContentType(){

  }
  checkIfHomePage(){
    if (window.location.href !== `${FRONTEND_URL}` &&
        window.location.href !== `${FRONTEND_URL}/` &&
        window.location.href !== HOME_URL) {
          this.setState({ isHomePage: false });
    } else {
      this.setState({ isHomePage: true });
    }
  }
  checkIfContactUsPage(){
    if (window.location.href === CONTACTUS_URL) {
      this.setState({ isContactUsPage: true });
    }
  }
  render(){

    return (
      <Router>
        <div>
          <div id="mm-0" className="mm-page mm-slideout">
            <div className="responsive-menu-page-wrapper">
            <div className="layout-container">
              <TopTopNavRegion
                topTopNav={this.state.topTopNav}
                headerPhone={this.state.headerPhone}
              />
              <HeaderRegion
                mainMenu={this.state.mainMenu}
                service={this.state.service}
                loadService={this.loadService}
                updateService={this.updateService}
              />
              {/* If Home Page. */
                this.state.isHomePage
                ?
                /* Render Hero and Callouts */
                <div>
                  <HeroRegion
                    hero={this.state.hero}
                  />
                  <MainSection
                    callouts={this.state.callouts}
                    basic={this.state.basic}
                    service={this.state.service}
                    sidebar={this.state.sidebar}
                    webform={this.state.webform}
                    isHomePage={this.state.isHomePage}
                    isContactUsPage={this.state.isContactUsPage}
                  />
                </div>
                :
                <MainSection
                  basic={this.state.basic}
                  service={this.state.service}
                  sidebar={this.state.sidebar}
                  webform={this.state.webform}
                  isContactUsPage={this.state.isContactUsPage}
                />
              }
              <TestimonialsRegion
                testimonials={this.state.testimonials}
              />
              <FooterRegion
                footer={this.state.footer}
                copyright={this.state.copyright}
              />
            </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
