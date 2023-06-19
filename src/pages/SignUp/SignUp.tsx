import signUpBackground from "~/assets/images/sign-up.png";

const SignUp = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-none w-2/5 bg-[#F6F8FE]"></div>
      <div className="flex flex-auto justify-center items-center">
        <img alt="background" src={signUpBackground} />
      </div>
    </div>
  );
};

export default SignUp;
