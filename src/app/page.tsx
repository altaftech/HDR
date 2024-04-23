import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Wallframe from "@/components/wallframe";

export default function Home() {
  return (
    <>
      <a href="#up" className="up fixed right-[5px] bottom-[50px] w-[40px] h-[40px] cursor-pointer rounded-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[1000]" >
                <img className="w-[30px]" src="./img/up.svg" alt="up" />
            </a>
            <Navbar />
            <section className="text-gray-600 body-font py-2">
                <div className="w-[80vw] px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full ">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#3F418C]" >Popular HD wallpapers</h1>
                        <p className="para lg:w-2/3 mx-auto leading-relaxed text-xl">Stunning HD wallpapers to decorate your desktop &
                            phone</p>
                    </div>
                </div>
                <Wallframe />
            </section>
            <Footer />
    </>
  );
}
