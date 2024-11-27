import LoginFormFragment from "@/components/fragments/form/login.fragment";

const LoginPage = () => {
  return (
    <div className="w-full flex flex-col gap-2 py-4 w-md items-center">
      <h2 className="font-bold ">Login Pages</h2>
      <LoginFormFragment />
    </div>
  );
};

export default LoginPage;
