import React from 'react'

function Header() {
    return (
        <header className="bg-orange-600 h-16 p-4 flex justify-between items-center">
            <h1 className="text-xl md:text-4xl text-white"><i className="fa-brands fa-blogger-b"></i></h1>

            <div className="flex-row gap-4 items-center flex">
                <p className="text-lg text-white">Home</p>
                <p className="text-lg text-white">|</p>
                <p className="text-lg text-white">About</p>
                <button className="text-lg text-orange-600 bg-white p-2 rounded-lg hover:bg-slate-100">Subscribe</button>
            </div>
        </header>
    )
}

export default Header
