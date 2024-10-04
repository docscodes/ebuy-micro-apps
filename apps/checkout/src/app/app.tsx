import { Header } from '@ebuy-micro-apps/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ShoppingBasket from './basket';
import { PRODUCT_LIST_MOCKS } from '@ebuy-micro-apps/mocks';
import { getSessionStorage } from '@ebuy-micro-apps/utils';


const createCompleteBasket = (allItems: any, quantities: any) => {
  return allItems
    .filter((item: any) => quantities[item.id])
    .map((item: any) => {
      return {
        ...item,
        quantity: quantities[item.id],
      };
    });
};

export function App() {

  const basketFromStorage: any = getSessionStorage('shoppingBasket');
  console.log('Basket: ', basketFromStorage);

  const completeBasket = createCompleteBasket(
    PRODUCT_LIST_MOCKS,
    basketFromStorage
  );

  return (
    <Container style={{ marginTop: '5rem' }}>
      <Header />
      <Text size="huge">Checkout</Text>
      <ShoppingBasket basketList={completeBasket} />
    </Container>
  );
}

export default App;