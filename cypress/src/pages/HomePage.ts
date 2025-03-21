import Header from '../components/Header';
import LogInModal from '../modals/LogInModal';
import BasePage from '../base/BasePage';
import Categories from '../components/Categories';
import Carousel from '../components/slider/Carousel';
import ContactModal from '../modals/ContactModal';
import AboutUsModal from '../modals/AboutUsModal';
import SignUpModal from '../modals/SignUpModal';
import OrderModal from '../modals/OrderModal';  // added by Belle

export default class HomePage extends BasePage {

  public header: Header = new Header();
  public logInModal: LogInModal = new LogInModal();
  public categories: Categories = new Categories();
  public carousel: Carousel = new Carousel();
  public contactModal: ContactModal = new ContactModal();
  public aboutUsModal: AboutUsModal = new AboutUsModal();
  public signUpModal: SignUpModal = new SignUpModal();
  public orderModal: OrderModal = new OrderModal();   // added by Belle

  constructor() {
    super('index.html');
  }
}