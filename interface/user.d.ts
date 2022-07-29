
declare namespace IUserApi {

  type LoginParam = Partial<{
    type: 'email' | 'phone';
    email: string;
    phone: string;
    phone_country: string;
    password: string;
    g_recaptcha_response: string;
    devic_ied: string;
    device_name: string;
  }>

}

