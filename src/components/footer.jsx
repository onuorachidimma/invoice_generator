import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="bg-[#005BAC]">
          <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <div className="text-[#005BAC]">
                  <Logo logoBg="#E6EFF7" nameFill="#E6EFF7" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 text-white">
                <div>
                  <p className="font-medium text-white">Product</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Invoice{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Billing{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        History{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-white">Features</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Invoice generator{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Template{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Purchase order{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-white">Resource</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Support{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Sign in{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Sign up{" "}
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-white">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Guidlines{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Policies{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-white transition hover:opacity-75"
                      >
                        {" "}
                        Laws{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
