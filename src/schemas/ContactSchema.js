import * as Yup from 'yup';

const ContactSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string().required('Required'),
  details: Yup.string().required('Required'),
  budget: Yup.string().required('Required'),
  release_date: Yup.date().required('Required')
});

export default ContactSchema;