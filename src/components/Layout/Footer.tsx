
function Footer() {
  return (
    <div className="flex justify-between bg-linear-to-r from-(--bg-color2) via-(--bg-color3) to-(--bg-color2) text-white px-2 py-5">
      <div>
        <p>MyApp.All rights reserved.</p>
      </div>
      <div className=" flex items-center gap-5">
        <a href="#"> Facebook</a>
        <a href="#"> Instagram</a>
        <a href="#"> Twitter</a>

        
      </div>
    </div>
  );
}

export default Footer;
