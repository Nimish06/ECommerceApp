import React, {
  useContext,
  createContext,
  useMemo,
  useCallback,
  useState,
} from 'react';

export interface CartItem {
  id: any;
  description: any;
  title: any;
  price: any;
  photo: any;
}
export interface CartContextProps {
  itemList: CartItem[];
  amount: any;
  totalItems: any;

  addItemToCart: (
    id: any,
    description: any,
    title: any,
    price: any,
    photo: any,
  ) => void;
  deleteOneItem: (deleteId: any, deletePrice: any, actualItems: any) => void;
  deleteItems: () => void;

  finalAmount: (amount: any, items: any) => any;
}

export const CartContext = createContext<CartContextProps>({} as any);
export function useCartContext() {
  return useContext(CartContext);
}
export default function CartContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [itemsArr, setItemsArr] = useState<CartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const deleteItems = useCallback(() => {
    setItemsArr([]);
    setTotalAmount(0);
    setNumberOfItems(0);
  }, []);
  const finalAmount = useCallback(
    (cartAmount: any, cartItems: any) => {
      // console.log('NOIMSMKSLKL', numberOfItems);
      setTotalAmount(totalAmount + cartAmount);
      setNumberOfItems(cartItems + 1);
    },
    [totalAmount],
  );
  const deleteOneItem = useCallback(
    (deleteId: any, deletePrice: any, itemsLeft: any) => {
      // console.log('NOI', itemsLeft);
      let totalPrice = 0;

      let newItems = itemsArr.filter(res => {
        // console.log('E111', res.id);

        return res.id !== deleteId;
      });
      // console.log('idkjj', numberOfItems);
      // console.log

      setItemsArr(newItems);
      setNumberOfItems(newItems.length);
      newItems.map(res => {
        totalPrice = totalPrice + res.price;
      });
      // console.log('pkelklfkl', totalPrice);

      setTotalAmount(totalPrice * (itemsLeft - 1));
    },
    [itemsArr],
  );

  const addItemToCart = useCallback(
    (
      cartId: any,
      cartDescription: any,
      cartTitle: any,
      cartPrice: any,
      cartPhoto: any,
    ) => {
      const item = {
        id: cartId,
        description: cartDescription,
        title: cartTitle,
        price: cartPrice,
        photo: cartPhoto,
      };
      setItemsArr([...itemsArr, item]);
      setNumberOfItems(numberOfItems + 1);
    },
    [itemsArr],
  );

  const values = useMemo(
    () => ({
      itemList: itemsArr,
      amount: totalAmount,
      totalItems: numberOfItems,
      addItemToCart,
      deleteItems,
      finalAmount,
      deleteOneItem,
    }),
    [
      itemsArr,
      totalAmount,
      numberOfItems,
      addItemToCart,
      deleteItems,
      finalAmount,
      deleteOneItem,
    ],
  );
  // console.log('Values', values);
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
