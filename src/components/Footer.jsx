
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer(){

    const date = new Date();
    const currentYear = date.getFullYear();

    return(
        <div className="w-full h-25 bg-red-700 flex flex-col items-center justify-center mt-4 " >
                <h1 className="mt-8" >👨‍💻 - Desenvolvedor Front-End - 🚀</h1>
                <div className="flex flex-row gap-5 p-2" >
                <a 
                className="flex flex-row justify-center items-center bg-blue-800 rounded-full p-1 text-sm  " 
                target="_blank" href="https://www.linkedin.com/in/emanoel-messias/"><FaLinkedinIn /></a>
                <a className="flex flex-row justify-center items-center bg-slate-900 rounded-full p-1  " target="_blank" href="https://github.com/Dev-Messias">
                <FaGithub />
                </a>
                </div>
                <p className="text-sm text-slate-200 mb-8 " >©2024 - {currentYear} </p>
            </div>
    )
}

export default Footer;