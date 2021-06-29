/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51J5TtfJyoSSpcFeY4uP6bmb4Z5aReQAmtKwF5HxctIFrLT3slT7YrpaCjWgE6I4VDvESzI1ueo7SipjewkaFSqJo004UtOoyT7'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
