import Image from "next/image";

export default function Footer(){
    return(
            <footer className="dark grid grid-cols-2 grid-rows-3 gap-x-px justify-items-center">
                <div></div>
                <div></div>
                <p className="dark:text-white text-sm font-medium text-gray-700">
                    Copyright &#169; 2022 &nbsp; &nbsp; Made by &nbsp;
                    <a className="font-medium text-indigo-600 hover:bg-gray-100"
                        href="https://github.com/marigabirodcue">
                        marigabirodcue
                    </a>
                </p>
                <div>
                <a className="mr-2.5 px-1 py-0"
                   href="#">
                        <Image
                            className="grayscale hover:bg-gray-100"
                            src="https://cdn.icon-icons.com/icons2/838/PNG/128/circle-instagram_icon-icons.com_66832.png"
                            alt=""
                            layout="fixed"
                            width="40"
                            height="40"
                        />
                </a>
                <a className="mr-2.5 px-1 py-0"
                   href="#">
                    <Image
                        className="grayscale hover:bg-gray-100"
                        src="https://cdn.icon-icons.com/icons2/838/PNG/128/circle-facebook_icon-icons.com_66834.png"
                        alt=""
                        layout="fixed"
                        width="40"
                        height="40"
                    />
                </a>
                <a className="mr-2.5 px-1 py-0"
                   href="#">
                    <Image
                        className="grayscale hover:bg-gray-100"
                        src="https://cdn.icon-icons.com/icons2/838/PNG/128/circle-facebook_icon-icons.com_66834.png"
                        alt=""
                        layout="fixed"
                        width="40"
                        height="40"
                    />
                </a>
                <a className="mr-2.5 px-1 py-0"
                   href="#">
                    <Image
                        className="grayscale hover:bg-gray-100"
                        src="https://cdn.icon-icons.com/icons2/838/PNG/128/circle-linkedin_icon-icons.com_66820.png"
                        alt=""
                        layout="fixed"
                        width="40"
                        height="40"
                    />
                </a>
                </div>
                
            </footer>
    );
}