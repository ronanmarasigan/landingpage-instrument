import React from 'react'

const Button = ({link, text}) => {
    return (
        <button type='button' className={`px-7 py-4 mt-10 rounded-[30px] bg-white font-poppins font-normal text-[12px] tracking-[3px] text-black transition ease-in-out delay-150  hover:scale-110 duration-300 `}
        >
            <a href={`/#${link}`} className='flex'>{text} <img alt='img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEvtlMENwjAQBMcd0AmUkHRAR6EEOqGEUAJ0QgdE90NRZN8uOC/8tmbkvfUVOp/Smc9f0EzYiegCXIFXkw7yDAI+AQ9gzEjUFxyAO3DMSlRBpCJJHIEkcQVpSU3wzrTk487m4H8peALDulnfRjQDJ2ATHq9zBdGkJtwVpOGOQII7gjNwq2W+bp4zg5DEuuiy7MSv4bcoLXIiSsOdIUvwXQQLDaAoGREMQ18AAAAASUVORK5CYII=" className="w-[20px] h-[20px]" /></a>  
        </button>
      )
}

export default Button;