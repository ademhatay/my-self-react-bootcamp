import { object, string } from 'yup';

const requiredMessage = 'Bu alan boş bırakılamaz';
const emailMessage = 'Geçerli bir e-posta adresi giriniz';
const minCharMessage = 'En az 5 karakter giriniz';

const contactSchema = object({
    firstName: string().required(requiredMessage),
    lastName: string().required(requiredMessage),
    email: string().email(emailMessage).required(requiredMessage),
    message: string().min(5, minCharMessage).required(requiredMessage),
});

export default contactSchema;
