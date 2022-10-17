import Header from '../components/Header';
import LogInWindow from '../modals/LogInModal';
import BasePage from '../base/BasePage';
import Categories from '../components/Categories';

export default class HomePage extends BasePage {

  public header: Header = new Header();
  public logInWindow: LogInWindow = new LogInWindow();
  public categories: Categories = new Categories();

  constructor() {
    super('index.html');
  }
}